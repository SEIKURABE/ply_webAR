import React, { useEffect, useRef, useState, Suspense } from "react";
import * as THREE from "three";
import { PLYLoader } from "three-stdlib";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Points, Preload } from "@react-three/drei";

const PointCloud = () => {
  const plyRef: any = useRef(null);
  const plyData = useRef(null);

  const [loaded, setLoaded] = useState(false);

  const loader = new PLYLoader();

  loader.load("/model/demo.ply", (geometry: any) => {
    const material = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
    });

    const points: any = new THREE.Points(geometry, material);
    plyData.current = points;

    setLoaded(true);
  });

  useEffect(() => {
    if (plyData.current) {
      plyRef.current.add(plyData.current);
    }
  }, [loaded]);

  return (
    <group dispose={null}>
      <mesh ref={plyRef} rotation={[0, -Math.PI, 0]} />
    </group>
  );
};

const App = () => {
  const canvasRef = useRef(null);

  return (
    <div className='page-index'>
      <Canvas ref={canvasRef} className='canvas'>
        <OrbitControls autoRotate={false} enableZoom={true} enablePan={true} />

        <ambientLight intensity={1} />
        {/* <Environment files='/hdr/adamsbridge.hdr' /> */}

        <axesHelper args={[2]} />

        <Suspense fallback={null}>
          <>
            {/* <Preload all /> */}

            <PointCloud />
          </>
        </Suspense>
      </Canvas>

      <style jsx>{`
        .page-index {
          width: 100%;
          height: 100%;
          background-color: #555;
          position: absolute;
        }
      `}</style>
    </div>
  );
};

export default App;
