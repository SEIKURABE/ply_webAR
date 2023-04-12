import React, { useEffect, useRef, useState, Suspense } from "react";
import Script from "next/script";

import * as THREE from "three";
// import * as AFRAME from "aframe";
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
      <Scene embedded arjs vr-mode-ui='enabled: false'>
        <Entity camera />
        <Entity
          geometry={{ primitive: "box" }}
          material={{ color: "red" }}
          position={{ x: 0, y: 0, z: -5 }}
        />
        <Entity particle-system={{ preset: "snow" }} />
        <Entity light={{ type: "point" }} />
        <Entity text={{ value: "Hello, WebVR!" }} />
      </Scene>

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
