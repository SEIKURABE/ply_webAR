import React, { useEffect, useRef, useState, Suspense } from "react";
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
      <Scene arjs='sourceType: webcam; detectionMode: mono_and_matrix; matrixCodeType: 3x3;'>
        <Entity
          camera
          position='0 1.6 0'
          // DeviceOrientationControlsは、モバイル端末でのみ動作します
          device-orientation-permission-ui
          wasd-controls-enabled='false'
          look-controls-enabled='false'
        />

        {detectorActivated && (
          <Entity
            primitive='a-plane'
            // 検出された平面のサイズを指定
            width='100'
            height='100'
            // 検出された平面の法線を指定
            // Plane Detectionでは、法線が検出された平面の垂直方向を示します
            rotation='-90 0 0'
            // 平面のマテリアルを指定
            material={{
              src: "https://i.imgur.com/mYmmbrp.png",
              transparent: true,
            }}
            // 平面がクリックされたときの処理
            onClick={() => alert("Clicked on the detected plane")}
          />
        )}

        {/* 平面検出を開始するボタン */}
        <Entity
          primitive='a-box'
          width='2'
          height='2'
          depth='2'
          position='0 1 -5'
          onClick={handleDetectorActivate}
          material={{
            src: "https://i.imgur.com/qNs4qDY.jpeg",
            transparent: true,
          }}
          text={{ value: "Start Plane Detection" }}
        />
      </Scene>

      <style jsx>{`
        .page-webar {
          width: 100%;
          height: 100%;
          background-color: #555;
          position: absolute;
        }
      `}</style>
    </div>
  ) : (
    <></>
  );
};

export default WebAR;
