import React, { useEffect, useRef, useState, Suspense } from "react";
import Script from "next/script";

import * as THREE from "three";
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

import { Entity, Scene } from "aframe-react";

const WebAR = () => {
  const sceneContainerRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      require("aframe");
      setReady(true);
    }
  });

  // const [detectorActivated, setDetectorActivated] = useState(false);

  // const handleDetectorActivate = () => {
  //   alert("handleDetectorActivate !!!!");
  //   setDetectorActivated(true);
  // };

  return (
    <>
      <Script
        src='https://aframe.io/releases/1.3.0/aframe.min.js'
        strategy='afterInteractive'
      />

      <Script
        src='https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js'
        strategy='afterInteractive'
      />

      <div className='page-webar'>
        {ready &&
          React.createElement(
            "scene-container",
            {
              ref: sceneContainerRef,
            },
            <a-scene embedded arjs vr-mode-ui='enabled: false'>
              <a-assets>
                <a-asset-item
                  id='model'
                  src='test/Chair.glb'
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
