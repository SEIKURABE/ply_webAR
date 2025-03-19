import React, { useRef, useState, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";

interface PLYModelProps {
  url: string;
  pointSize?: number;
}

const Loader: React.FC = () => {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial color='gray' wireframe />
    </mesh>
  );
};

const PLYModel: React.FC<PLYModelProps> = ({ url, pointSize = 0.01 }) => {
  const [geometry, setGeometry] = useState<THREE.BufferGeometry | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const materialRef = useRef<THREE.PointsMaterial>(
    new THREE.PointsMaterial({
      size: pointSize,
      vertexColors: true,
    })
  );

  useEffect(() => {
    if (!url) {
      setLoading(false);
      return;
    }

    const loader = new PLYLoader();
    const controller = new AbortController();
    let isMounted = true;

    fetch(url, { method: "HEAD", cache: "no-store" })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`モデルが見つかりません (404): ${url}`);
        }

        loader.load(
          url,
          (loadedGeometry) => {
            if (!isMounted) return;
            loadedGeometry.computeVertexNormals();
            loadedGeometry.computeBoundingBox();

            // 中心を計算して設定
            const boundingBox = loadedGeometry.boundingBox;
            if (boundingBox) {
              const centerPoint = new THREE.Vector3();
              boundingBox.getCenter(centerPoint);
              loadedGeometry.translate(
                -centerPoint.x,
                -centerPoint.y,
                -centerPoint.z
              );
            }

            setGeometry(loadedGeometry);
            setLoading(false);
          },
          // プログレスコールバック
          (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
          },
          (err) => {
            if (!isMounted) return;
            console.error(err.message || "PLYファイルの読み込みに失敗しました");
            setLoading(false);
          }
        );
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });

    return () => {
      isMounted = false;
      controller.abort();
      if (geometry) geometry.dispose();
      if (materialRef.current) materialRef.current.dispose();
    };
  }, [url]);

  if (loading) return <Loader />;

  if (!geometry) return null;

  return (
    <points
      geometry={geometry}
      material={materialRef.current}
      rotation={[0, Math.PI, 0]}
    />
  );
};

const SceneSetup: React.FC = () => {
  const { scene } = useThree();
  useEffect(() => {
    scene.background = new THREE.Color(0x111111);
    return () => {
      scene.background = null;
    };
  }, [scene]);
  return null;
};

interface PLYViewerProps {
  modelUrl: string;
  pointSize?: number;
}

const PLYViewer: React.FC<PLYViewerProps> = ({ modelUrl }) => {
  useEffect(() => {
    console.log("PLYViewer received modelUrl:", modelUrl);
  }, [modelUrl]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas shadows>
        <SceneSetup />
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        {modelUrl ? <PLYModel url={modelUrl} /> : <Loader />}

        <axesHelper args={[1]} />
        <OrbitControls enablePan enableZoom enableRotate />
      </Canvas>
    </div>
  );
};

export default PLYViewer;
