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
  return <></>;
}

const WebAR = () => {
  const canvasRef = useRef(null);

  const isIos = () => {
    const ua = navigator.userAgent.toLowerCase();
    return (
      ua.indexOf("iphone") >= 0 ||
      ua.indexOf("ipad") >= 0 ||
      ua.indexOf("ipod") >= 0
    );
  };

  const checkDeviceOrien = () => {
    // Promiseで書く
    return new Promise((resolve, reject) => {
      // iOS以外（android）の場合には追加処理が必要ないのでresolveを返す
      if (!isIos()) resolve("resolve");

      const deviceOrienEvent = () => {
        window.removeEventListener(
          "deviceorientation",
          deviceOrienEvent,
          false
        );
        resolve("resolve");
      };
      // deviceorientationイベントで既にスマホの傾きが取れているか確認
      window.addEventListener("deviceorientation", deviceOrienEvent, false);
    });
  };

  const [ready, setReady] = useState(false);

  useEffect(() => {
    checkDeviceOrien()
      .then(() => {
        // checkDeviceOrien関数のPromiseの結果が出てからThreeシーンの生成を行わせる
        setReady(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return ready ? (
    <div className='page-index'>
      <Canvas ref={canvasRef} className='canvas'>
        <PerspectiveCamera />
        <DeviceOrientationControls />
        <ambientLight intensity={1} />

        <axesHelper args={[1]} />

        <Suspense fallback={null}>
          <>
            <Box args={[100, 100, 100, 4, 4, 4]}>
              <meshBasicMaterial wireframe />
              <axesHelper args={[100]} />
            </Box>
          </>
        </Suspense>
      </Canvas>

      <div className='modal'>
        このページでは端末の向きと方向を取得し ます。
        次に表示されるポップアップに従って「許可」を選択してください。
        <button type='button' className='btn'>
          OK
        </button>
      </div>

      <style jsx>{`
        .page-index {
          width: 100%;
          height: 100%;
          background-color: #555;
          position: absolute;
        }

        .modal {
          max-width: 320px;
          padding: 16px 32px;
          background: #fff;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #000;

          .btn {
            width: 100%;
            height: 40px;
            background: #000 !important;
            @include flex-align;
            margin: 24px auto 0;
            text-align: center;
            color: #fff;
            @include font-size(16px);
            cursor: pointer;
          }
        }
      `}</style>
    </div>
  ) : null;
};

export default WebAR;
