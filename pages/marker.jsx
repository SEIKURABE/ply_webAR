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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const load = async () => {
        await require("aframe");

        setMounted(true);
      };

      load();
    }
  });

  // const [detectorActivated, setDetectorActivated] = useState(false);

  // const handleDetectorActivate = () => {
  //   alert("handleDetectorActivate !!!!");
  //   setDetectorActivated(true);
  // };

  return mounted ? (
    <div className='page-webar'>
      {React.createElement(
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

      <style jsx>{`
        .page-webar {
          width: 100%;
          height: 100%;
          background-color: #555;
          position: absolute;
          overflow: hidden;
        }
      `}</style>
    </div>
  ) : (
    <></>
  );
};

export default WebAR;
