import React, { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";

import Webcam from "react-webcam";

export const WebCamera = () => {
  const containerRef = useRef(null);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (containerRef.current) {
      setWindowSize({
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight,
      });
    }
  }, []);

  return (
    <div ref={containerRef} className='web-camera-container'>
      <Webcam
        width={windowSize.width}
        height={windowSize.height}
        videoConstraints={{
          width: windowSize.width,
          height: windowSize.height,
          facingMode: { exact: "environment" },
        }}
      />

      <style jsx>{`
        .web-camera-container {
          width: 100%;
          height: 100%;
          background-color: rgba(blue, 0.5);
        }

        .video-camera {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0 0 0 0;
        }
      `}</style>
    </div>
  );
};
