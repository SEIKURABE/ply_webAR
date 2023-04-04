import React, { useEffect, useRef, useState, Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Points, Preload } from "@react-three/drei";

import { Model } from "../components/Model";

const App = () => {
  const canvasRef = useRef(null);

  return (
    <div className='page-index'>
      <Canvas ref={canvasRef} className='canvas'>
        <OrbitControls autoRotate={false} enableZoom={true} enablePan={true} />

        <ambientLight intensity={1} />
        {/* <Environment files='/hdr/adamsbridge.hdr' /> */}

        <axesHelper args={[1]} />

        <Suspense fallback={null}>
          <>
            {/* <Preload all /> */}

            <Model rotation={[0, -Math.PI, 0]} />
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
