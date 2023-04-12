import React, { useEffect, useRef, useState, Suspense } from "react";
import Script from "next/script";

import * as THREE from "three";
import { Entity, Scene } from "aframe-react";

const WebAR = () => {
  const canvasRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      require("aframe");
      setMounted(true);
    }
  });

  const [detectorActivated, setDetectorActivated] = useState(false);

  const handleDetectorActivate = () => {
    alert("handleDetectorActivate !!!!");
    setDetectorActivated(true);
  };

  return mounted ? (
    <div className='page-webar'>
      <a-scene embedded arjs>
        <a-box position='-1 0.5 -3' rotation='0 45 0' color='#4CC3D9' />
        <a-sphere position='0 1.25 -5' radius='1.25' color='#EF2D5E' />
        <a-cylinder
          position='1 0.75 -3'
          radius='0.5'
          height='1.5'
          color='#FFC65D'
        />
        <a-plane
          position='0 0 -4'
          rotation='-90 0 0'
          width='4'
          height='4'
          color='#7BC8A4'
        />
      </a-scene>

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
