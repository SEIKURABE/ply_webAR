import React, { useEffect, useRef, useState, Suspense, Fragment } from "react";
import Head from "next/head";
import Script from "next/script";

// import * as THREE from "three";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Box,
  PerspectiveCamera,
  DeviceOrientationControls,
  OrbitControls,
  Points,
  Preload,
} from "@react-three/drei";

import { Entity, Scene } from "aframe-react";

const WebAR = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setReady(true);
    }
  }, []);

  return (
    <>
      <div className='page-webar'>
        {ready &&
          React.createElement(
            "scene-container",
            {
              ref: sceneRef,
            },
            <a-scene embedded arjs vr-mode-ui='enabled: false'>
              <a-assets>
                <a-asset-item
                  id='model'
                  src='/test/Chair.glb'
                  scale='1 1 1'
                ></a-asset-item>
              </a-assets>

              <a-marker type='pattern' url='marker/pattern-marker.patt'>
                <a-entity gltf-model='#model' rotation='-90 0 0'></a-entity>
              </a-marker>

              <a-entity camera></a-entity>
            </a-scene>
          )}
      </div>

      <style jsx>{`
        .page-webar {
          width: 100%;
          height: 100%;
          background-color: #555;
          position: absolute;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default WebAR;
