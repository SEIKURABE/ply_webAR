import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";

interface PLYViewerProps {
  modelUrls: string[];
  pointSize?: number;
  frameDuration?: number;
}

const PLYViewer: React.FC<PLYViewerProps> = ({
  modelUrls,
  pointSize = 0.01,
  frameDuration = 50,
}) => {
  const [geometries, setGeometries] = useState<THREE.BufferGeometry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const materialRef = useRef<THREE.PointsMaterial>(
    new THREE.PointsMaterial({
      size: pointSize,
      vertexColors: true,
    })
  );
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    const loader = new PLYLoader();
    const loadedGeometries: THREE.BufferGeometry[] = [];
    let loadedCount = 0;
    const abortControllers: AbortController[] = [];

    modelUrls.forEach((url, index) => {
      const controller = new AbortController();
      abortControllers.push(controller);

      fetch(url, { signal: controller.signal })
        .then((response) => response.blob())
        .then((blob) => {
          const reader = new FileReader();
          reader.onload = () => {
            if (!isMounted.current) return;
            const arrayBuffer = reader.result as ArrayBuffer;
            const geometry = loader.parse(arrayBuffer);

            if (!geometry.attributes.normal) {
              geometry.computeVertexNormals();
            }
            geometry.computeBoundingBox();
            const box = geometry.boundingBox;
            if (box) {
              const center = new THREE.Vector3();
              box.getCenter(center);
              geometry.translate(-center.x, -center.y, -center.z);
            }
            loadedGeometries[index] = geometry;
            loadedCount++;
            setProgress(loadedCount);
            if (loadedCount === modelUrls.length) {
              setGeometries(loadedGeometries);
              setLoading(false);
            }
          };
          reader.readAsArrayBuffer(blob);
        })
        .catch((error) => {
          if (error.name !== "AbortError") {
            console.error("Failed to load PLY file:", error);
          }
        });
    });

    return () => {
      isMounted.current = false;
      loadedGeometries.forEach((geo) => geo.dispose());
      materialRef.current.dispose();
      abortControllers.forEach((controller) => controller.abort());
    };
  }, [modelUrls]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <p>
          Loading {progress}/{modelUrls.length} models...
        </p>
        <progress
          value={progress}
          max={modelUrls.length}
          style={{ width: "100%" }}
        />
      </div>
    );
  }
  if (geometries.length === 0) return null;

  return (
    <Canvas>
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <AnimatingPoints
        geometries={geometries}
        material={materialRef.current}
        frameDuration={frameDuration}
      />
      <axesHelper args={[1]} />
      <OrbitControls enablePan enableZoom enableRotate />
    </Canvas>
  );
};

const AnimatingPoints: React.FC<{
  geometries: THREE.BufferGeometry[];
  material: THREE.PointsMaterial;
  frameDuration: number;
}> = ({ geometries, material, frameDuration }) => {
  const [frameIndex, setFrameIndex] = useState(0);
  const lastFrameTime = useRef(performance.now());
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useFrame(() => {
    if (!isMounted.current) return;
    const now = performance.now();
    if (now - lastFrameTime.current > frameDuration) {
      setFrameIndex((prevIndex) => (prevIndex + 1) % geometries.length);
      lastFrameTime.current = now;
    }
  });

  return (
    <points
      geometry={geometries[frameIndex]}
      material={material}
      rotation={[0, Math.PI, 0]}
    />
  );
};

export default PLYViewer;
