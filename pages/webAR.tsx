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
  const [isShowModal, showModal] = useState(true);

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

      const alertMessage =
        "モーションセンサーの使用が拒否されました。\nこのページを楽しむには、デバイスモーションセンサーの使用を許可する必要があります。\nSafariのアプリを再起動して、モーションセンサーの使用（「動作と方向」へのアクセス）を許可をしてください。";
      const deviceOrienModalButton = document.getElementById(
        "device-orien-modal-button"
      );

      deviceOrienModalButton?.addEventListener("click", () => {
        // ここからスマホの傾きを取得するためのリクエストをする処理
        if (
          window.DeviceMotionEvent &&
          (window.DeviceMotionEvent as any).requestPermission &&
          typeof (window.DeviceMotionEvent as any).requestPermission ===
            "function"
        ) {
          (window.DeviceMotionEvent as any)
            .requestPermission()
            .then((res: any) => {});
        }
        if (
          window.DeviceOrientationEvent &&
          (window.DeviceOrientationEvent as any).requestPermission &&
          typeof (DeviceOrientationEvent as any).requestPermission ===
            "function"
        ) {
          (window.DeviceOrientationEvent as any)
            .requestPermission()
            .then((res: any) => {
              console.log(res);
              if (res === "granted") {
                // 許可が選択されたらモーダルを非表示にする
                deviceOrienModalButton.classList.add("is-hidden");

                resolve("resolve");
              } else {
                // 拒否されたらアラートを表示
                alert(alertMessage);
                reject("resolve");
              }
            });
        } else {
          alert(alertMessage);
          reject("resolve");
        }
      });
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
        <button type='button' id='device-orien-modal-button' className='btn'>
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

          &.is-hidden {
            display: none;
          }

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
