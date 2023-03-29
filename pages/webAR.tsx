import React, { useEffect, useRef, useState, Suspense } from "react";
import * as THREE from "three";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";

import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Box,
  PerspectiveCamera,
  DeviceOrientationControls,
  OrbitControls,
  Points,
  Preload,
} from "@react-three/drei";

import { addUrlPrefix } from "../util/addUrlPrefix";

export function DeviceOrientationControlsStory() {
  const cameraRef = useRef(null);
  const deviceOrientationRef = useRef(null);

  console.log(cameraRef.current);

  return (
    <>
      <PerspectiveCamera ref={cameraRef} />

      <DeviceOrientationControls
        ref={deviceOrientationRef}
        args={[cameraRef.current]}
      />

      <Box args={[100, 100, 100, 4, 4, 4]}>
        <meshBasicMaterial wireframe />
        <axesHelper args={[100]} />
      </Box>
    </>
  );
}

const WebAR = () => {
  const canvasRef = useRef(null);

  return (
    <div className='page-index'>
      <Canvas
        ref={canvasRef}
        className='canvas'
        camera={{ position: [0, 0, 5] }}
      >
        <ambientLight intensity={1} />

        <axesHelper args={[1]} />

        <Suspense fallback={null}>
          <>
            {/* <Preload all /> */}

            <DeviceOrientationControlsStory />
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

export default WebAR;
