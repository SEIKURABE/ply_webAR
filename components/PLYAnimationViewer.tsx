import React, { useRef, useState, useEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";

// PLYアニメーションのプロパティの型定義
interface PLYAnimationProps {
  urls: string[];
  fps?: number;
}

// PLYビューアーのプロパティの型定義
interface PLYViewerProps {
  modelUrls: string[];
  fps?: number;
  pointSize?: number;
  autoPlay?: boolean;
}

// エラーメッセージの型定義
interface ErrorProps {
  message: string;
}

// PLYアニメーションを表示するコンポーネント
const PLYAnimation: React.FC<PLYAnimationProps> = ({ urls, fps = 10 }) => {
  const [geometries, setGeometries] = useState<THREE.BufferGeometry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ErrorProps | null>(null);
  const [loadProgress, setLoadProgress] = useState<number>(0);
  const [currentFrameIndex, setCurrentFrameIndex] = useState<number>(0);

  // 点群表示用のマテリアル
  const materialRef = useRef<THREE.PointsMaterial>(
    new THREE.PointsMaterial({
      size: 0.01,
      vertexColors: true, // 頂点カラーを有効化
    })
  );

  // フレームカウンターとタイミング管理
  const frameCounter = useRef<number>(0);
  const framesPerModel = useRef<number>(Math.floor(60 / fps)); // 60fpsを想定

  // すべてのPLYファイルを読み込む
  useEffect(() => {
    const loadedGeometries: THREE.BufferGeometry[] = [];
    let loadedCount = 0;
    setLoading(true);

    const loader = new PLYLoader();

    urls.forEach((url, index) => {
      loader.load(
        url,
        (loadedGeometry: THREE.BufferGeometry) => {
          // 法線が含まれていない場合は計算する
          if (!loadedGeometry.attributes.normal) {
            loadedGeometry.computeVertexNormals();
          }

          // ジオメトリのバウンディングボックスを計算して中心に配置
          loadedGeometry.computeBoundingBox();
          const box = loadedGeometry.boundingBox;

          if (box) {
            const center = new THREE.Vector3();
            box.getCenter(center);
            loadedGeometry.translate(-center.x, -center.y, -center.z);

            // 最初のモデルのみでスケールを決定し、以降のモデルにも同じスケールを適用
            if (index === 0) {
              const size = box.getSize(new THREE.Vector3());
              const maxDim = Math.max(size.x, size.y, size.z);
              if (maxDim > 2) {
                const scale = 2 / maxDim;
                loadedGeometry.scale(scale, scale, scale);
              }
            } else if (loadedGeometries[0]) {
              // 最初のモデルと同じスケールを適用
              const firstBox = loadedGeometries[0].boundingBox;
              const size = box.getSize(new THREE.Vector3());
              const firstSize =
                firstBox?.getSize(new THREE.Vector3()) ||
                new THREE.Vector3(1, 1, 1);
              const scale = Math.max(
                firstSize.x / size.x,
                firstSize.y / size.y,
                firstSize.z / size.z
              );
              loadedGeometry.scale(scale, scale, scale);
            }
          }

          // 配列の正しい位置にジオメトリを格納
          loadedGeometries[index] = loadedGeometry;

          // 読み込み進捗を更新
          loadedCount++;
          setLoadProgress((loadedCount / urls.length) * 100);

          // すべて読み込み完了したら状態を更新
          if (loadedCount === urls.length) {
            setGeometries(loadedGeometries);
            setLoading(false);
          }
        },
        (xhr: any) => {
          // 個別のファイルの進捗状況
          console.log(`${url}: ${(xhr.loaded / xhr.total) * 100}% loaded`);
        },
        (err: any) => {
          console.error(`PLYファイルの読み込みに失敗しました: ${url}`, err);
          setError({ message: `PLYファイルの読み込みに失敗しました: ${url}` });
          setLoading(false);
        }
      );
    });

    return () => {
      // クリーンアップ
      loadedGeometries.forEach((geometry) => {
        geometry.dispose();
      });
    };
  }, [urls]);

  // requestAnimationFrameを使ってフレームを更新
  useFrame(() => {
    if (loading || geometries.length === 0) return;

    // FPSに基づいてフレームカウンターを更新
    frameCounter.current++;

    if (frameCounter.current >= framesPerModel.current) {
      frameCounter.current = 0;
      // 次のフレームに切り替え
      setCurrentFrameIndex((prevIndex) => (prevIndex + 1) % geometries.length);
    }
  });

  if (loading) return <LoadingIndicator progress={loadProgress} />;
  if (error) return <Error message={error.message} />;
  if (geometries.length === 0) return null;

  const currentGeometry = geometries[currentFrameIndex];

  return (
    <points geometry={currentGeometry} material={materialRef.current}>
      {/* 点群の設定 */}
    </points>
  );
};

// ローディングインジケーター（進捗表示付き）
const LoadingIndicator: React.FC<{ progress: number }> = ({ progress }) => {
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame(() => {
    if (materialRef.current) {
      materialRef.current.opacity = 0.5 + 0.5 * Math.sin(Date.now() * 0.005);
      materialRef.current.needsUpdate = true;
    }
  });

  return (
    <group>
      <mesh>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial
          ref={materialRef}
          color='cyan'
          transparent={true}
          opacity={0.7}
        />
      </mesh>
      <mesh position={[0, -1, 0]}>
        <boxGeometry args={[2, 0.1, 0.1]} />
        <meshStandardMaterial color='gray' />
      </mesh>
      <mesh position={[-1 + progress / 100, -1, 0]}>
        <boxGeometry args={[progress / 50, 0.1, 0.1]} />
        <meshStandardMaterial color='cyan' />
      </mesh>
    </group>
  );
};

// エラーメッセージ
const Error: React.FC<ErrorProps> = ({ message }) => {
  console.error(message);
  return (
    <group>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color='red' />
      </mesh>
    </group>
  );
};

// シーン設定
const SceneSetup: React.FC = () => {
  const { scene } = useThree();

  useEffect(() => {
    // 背景色を設定 (暗めの背景色が点群を見やすくする)
    scene.background = new THREE.Color(0x111111);
  }, [scene]);

  return null;
};

// カメラ設定とコントロール
const CameraControls: React.FC = () => {
  const { camera } = useThree();

  useEffect(() => {
    // カメラの初期位置を設定
    camera.position.set(0, 0, 3);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return (
    <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
  );
};

// 点群のサイズを調整できるコンポーネント
const PointSizeAdjuster: React.FC<{ size: number }> = ({ size }) => {
  const points = React.useRef<THREE.Points>(null);

  useEffect(() => {
    if (
      points.current &&
      points.current.material instanceof THREE.PointsMaterial
    ) {
      points.current.material.size = size;
      points.current.material.needsUpdate = true;
    }
  }, [size]);

  return null;
};

// 再生コントロールボタン
const PlaybackControls: React.FC<{
  playing: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrev: () => void;
}> = ({ playing, onPlayPause, onNext, onPrev }) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "10px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "10px",
        background: "rgba(0,0,0,0.5)",
        padding: "5px",
        borderRadius: "5px",
      }}
    >
      <button onClick={onPrev} style={{ padding: "5px 10px" }}>
        前
      </button>
      <button onClick={onPlayPause} style={{ padding: "5px 10px" }}>
        {playing ? "一時停止" : "再生"}
      </button>
      <button onClick={onNext} style={{ padding: "5px 10px" }}>
        次
      </button>
    </div>
  );
};

// メインのPLYビューアーコンポーネント
const PLYViewer: React.FC<PLYViewerProps> = ({
  modelUrls,
  fps = 10,
  pointSize = 0.01,
  autoPlay = true,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);
  const [currentFrame, setCurrentFrame] = useState<number>(0);
  const animationRef = useRef<number | null>(null);
  const lastUpdateTime = useRef<number>(0);
  const frameInterval = 1000 / fps; // ミリ秒単位でのフレーム間隔

  // 手動再生制御のためのアニメーションループ
  useEffect(() => {
    if (!isPlaying) {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      return;
    }

    const updateFrame = (time: number) => {
      if (time - lastUpdateTime.current >= frameInterval) {
        setCurrentFrame((prev) => (prev + 1) % modelUrls.length);
        lastUpdateTime.current = time;
      }
      animationRef.current = requestAnimationFrame(updateFrame);
    };

    animationRef.current = requestAnimationFrame(updateFrame);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, fps, modelUrls.length, frameInterval]);

  // 再生/一時停止の切り替え
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // 次のフレームに進む
  const nextFrame = () => {
    setCurrentFrame((prev) => (prev + 1) % modelUrls.length);
  };

  // 前のフレームに戻る
  const prevFrame = () => {
    setCurrentFrame((prev) => (prev - 1 + modelUrls.length) % modelUrls.length);
  };

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Canvas shadows>
        {/* シーン設定 */}
        <SceneSetup />

        {/* 環境光とライトを設定 */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <hemisphereLight args={[0xffffff, 0x444444]} intensity={0.5} />

        {/* PLYモデルを表示 */}
        {isPlaying ? (
          // 自動再生モード
          <PLYAnimation urls={modelUrls} fps={fps} />
        ) : (
          // 手動制御モード - 現在のフレームのみ表示
          <PLYAnimation urls={[modelUrls[currentFrame]]} fps={0} />
        )}

        {/* カメラコントロールを追加 */}
        <CameraControls />

        {/* 点群サイズの調整 */}
        <PointSizeAdjuster size={pointSize} />
      </Canvas>

      {/* 再生コントロール */}
      <PlaybackControls
        playing={isPlaying}
        onPlayPause={togglePlayPause}
        onNext={nextFrame}
        onPrev={prevFrame}
      />
    </div>
  );
};

export default PLYViewer;
