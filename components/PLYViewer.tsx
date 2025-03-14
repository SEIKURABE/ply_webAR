import React, { useRef, useState, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";

// PLYモデルのプロパティの型定義
interface PLYModelProps {
  url: string;
}

// エラーメッセージの型定義
interface ErrorProps {
  message: string;
}

// PLYビューアーのプロパティの型定義
interface PLYViewerProps {
  modelUrl: string;
  pointSize?: number;
}

// PLYモデルを読み込み、表示するコンポーネント
const PLYModel: React.FC<PLYModelProps> = ({ url }) => {
  const [geometry, setGeometry] = useState<THREE.BufferGeometry | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [hasVertexColors, setHasVertexColors] = useState<boolean>(false);

  // 点群表示用のマテリアル
  const materialRef = useRef<THREE.PointsMaterial>(
    new THREE.PointsMaterial({
      size: 0.01,
      vertexColors: true, // 頂点カラーを有効化
    })
  );

  // メッシュ表示用のマテリアル
  const meshMaterialRef = useRef<THREE.MeshStandardMaterial>(
    new THREE.MeshStandardMaterial({
      color: 0xffffff,
      flatShading: true,
      vertexColors: true, // 頂点カラーを有効化
    })
  );

  useEffect(() => {
    const loader = new PLYLoader();
    setLoading(true);

    loader.load(
      url,
      (loadedGeometry: THREE.BufferGeometry) => {
        // 法線が含まれていない場合は計算する
        if (!loadedGeometry.attributes.normal) {
          loadedGeometry.computeVertexNormals();
        }

        // 色情報が含まれているか確認
        const hasColors = !!loadedGeometry.attributes.color;
        setHasVertexColors(hasColors);

        if (hasColors) {
          console.log("PLYファイルに色情報が含まれています");
        } else {
          console.log("PLYファイルに色情報が含まれていません");
        }

        // ジオメトリのバウンディングボックスを計算して中心に配置
        loadedGeometry.computeBoundingBox();
        const box = loadedGeometry.boundingBox;

        if (box) {
          const center = new THREE.Vector3();
          box.getCenter(center);
          loadedGeometry.translate(-center.x, -center.y, -center.z);

          // モデルのスケールを調整
          const size = box.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          if (maxDim > 2) {
            const scale = 2 / maxDim;
            loadedGeometry.scale(scale, scale, scale);
          }
        }

        setGeometry(loadedGeometry);
        setLoading(false);
      },
      (xhr: any) => {
        // 進捗状況をコンソールに表示
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (err: any) => {
        console.error("PLYファイルの読み込みに失敗しました", err);
        setError(
          new Error(err.message || "PLYファイルの読み込みに失敗しました")
        );
        setLoading(false);
      }
    );
  }, [url]);

  if (loading) return <Loader />;
  if (!geometry) return null;

  // 点群としてレンダリング
  return (
    <points geometry={geometry} material={materialRef.current}>
      {/* 点群の設定 */}
    </points>
  );
};

// ローディングインジケーター
const Loader: React.FC = () => {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial color='gray' wireframe />
    </mesh>
  );
};

// シーン設定（背景色など）
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

// メインのPLYビューアーコンポーネント
const PLYViewer: React.FC<PLYViewerProps> = ({
  modelUrl,
  pointSize = 0.01,
}) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas shadows>
        {/* シーン設定 */}
        <SceneSetup />

        {/* 環境光とライトを設定 */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <hemisphereLight args={[0xffffff, 0x444444]} intensity={0.5} />

        {/* PLYモデルを表示 */}
        <PLYModel url={modelUrl} />

        {/* カメラコントロールを追加 */}
        <CameraControls />

        {/* 点群サイズの調整 */}
        <PointSizeAdjuster size={pointSize} />
      </Canvas>
    </div>
  );
};

export default PLYViewer;
