import React, { useRef, useState, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";

interface PLYModelProps {
  url: string;
}

const Loader: React.FC = () => {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial color='gray' wireframe />
    </mesh>
  );
};

const PLYModel: React.FC<PLYModelProps> = ({ url }) => {
  const [geometry, setGeometry] = useState<THREE.BufferGeometry | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const materialRef = useRef<THREE.PointsMaterial | null>(null);

  useEffect(() => {
    if (!url) {
      setError(new Error("モデルのURLが無効です"));
      setLoading(false);
      return;
    }
    console.log("Loading PLY file from:", url);

    const loader = new PLYLoader();
    const controller = new AbortController();
    let isMounted = true;

    loader.load(
      url,
      (loadedGeometry) => {
        if (!isMounted) return;
        loadedGeometry.computeVertexNormals();
        loadedGeometry.computeBoundingBox();
        setGeometry(loadedGeometry);
        setLoading(false);
      },
      undefined,
      (err) => {
        if (!isMounted) return;
        console.log(err.message || "PLYファイルの読み込みに失敗しました");

        setLoading(false);
      }
    );

    return () => {
      isMounted = false;
      controller.abort();
      geometry?.dispose();
      materialRef.current?.dispose();
    };
  }, [url]);

  if (loading) return <Loader />;

  if (!geometry) return null;

  return (
    <points
      geometry={geometry}
      material={new THREE.PointsMaterial({ size: 0.01, vertexColors: true })}
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

const CameraControls: React.FC = () => {
  return <OrbitControls enablePan enableZoom enableRotate />;
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
        <CameraControls />
      </Canvas>
    </div>
  );
};

export default PLYViewer;
