import React, { useEffect, useRef, useState, Suspense } from "react";
import * as THREE from "three";
import { PLYLoader } from "three-stdlib";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Preload } from "@react-three/drei";

const PLYModel = () => {
  const loader = new PLYLoader();
  const [ply, setPly] = React.useState(null);

  const material = new THREE.MeshStandardMaterial({
    color: "#555555",
    metalness: 0,
    roughness: 0,
  });

  React.useEffect(() => {
    loader.load("/model/demo.ply", (ply: any) => {
      ply.computeVertexNormals();
      setPly(ply);
    });
  }, []);

  return ply ? (
    <group dispose={null}>
      <mesh
        geometry={ply}
        material={material}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  ) : null;
};

const App = () => {
  const canvasRef = useRef(null);

  return (
    <div className='page-index'>
      <Canvas ref={canvasRef} className='canvas'>
        <OrbitControls autoRotate={false} enableZoom={true} enablePan={false} />

        <ambientLight intensity={1} />
        <Environment files='/hdr/adamsbridge.hdr' />

        <Suspense fallback={null}>
          <>
            <Preload all />

            <PLYModel />
          </>
        </Suspense>
      </Canvas>

      <style jsx>{`
        .page-index {
          width: 100%;
          height: 100%;
          position: absolute;
        }
      `}</style>
    </div>
  );
};

export default App;
