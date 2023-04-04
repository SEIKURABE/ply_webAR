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

import { Model } from "../components/Model";
import { WebCamera } from "../components/WebCamera";

const WebAR = () => {
  const canvasRef = useRef(null);
  const DeviceOrientationControlsRef = useRef(null);
  const [isShowModal, showModal] = useState(true);
  const [ready, setReady] = useState(false);

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
      if (!isIos()) {
        resolve("resolve");
      }

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

  const checkModalDeviceOrien = () => {
    // Promiseで書く
    return new Promise((resolve, reject) => {
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
        typeof (window.DeviceOrientationEvent as any).requestPermission ===
          "function"
      ) {
        (window.DeviceOrientationEvent as any)
          .requestPermission()
          .then((res: any) => {
            console.log(res);
            if (res === "granted") {
              // 許可が選択されたらモーダルを非表示にする
              setReady(true);
              showModal(false);
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
  };

  useEffect(() => {
    checkDeviceOrien()
      .then(() => {
        // checkDeviceOrien関数のPromiseの結果が出てからThreeシーンの生成を行わせる
        setReady(true);
        showModal(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const alertMessage =
    "モーションセンサーの使用が拒否されました。\nこのページを楽しむには、デバイスモーションセンサーの使用を許可する必要があります。\nSafariのアプリを再起動して、モーションセンサーの使用（「動作と方向」へのアクセス）を許可をしてください。";

  const handleClickModalButton = () => {
    checkModalDeviceOrien();
  };

  const [activeCamera, setActiveCamera] = useState(false);
  const handleClickActiveCameraButton = () => {
    setActiveCamera(!activeCamera);
  };

  return (
    <div className='page-webar'>
      <div className='main'>
        {ready && (
          <Canvas ref={canvasRef} className='canvas'>
            <OrbitControls
              autoRotate={false}
              enableZoom={true}
              enablePan={true}
            />
            {/* <PerspectiveCamera /> */}
            <DeviceOrientationControls ref={DeviceOrientationControlsRef} />
            <ambientLight intensity={1} />

            <axesHelper args={[1]} />

            <Suspense fallback={null}>
              <>
                {/* <Box args={[100, 100, 100, 4, 4, 4]}>
                  <meshBasicMaterial wireframe />
                  <axesHelper args={[100]} />
                </Box> */}

                <Model rotation={[0, -Math.PI, 0]} />
              </>
            </Suspense>
          </Canvas>
        )}

        {isShowModal && (
          <div className='modal'>
            このページでは端末の向きと方向を取得し ます。
            次に表示されるポップアップに従って「許可」を選択してください。
            <button
              type='button'
              className='btn'
              onClick={handleClickModalButton}
            >
              OK
            </button>
          </div>
        )}
      </div>

      <div className='background-video'>{activeCamera && <WebCamera />}</div>

      <div className='button-container'>
        <button
          type='button'
          className={`active-camera-button ${activeCamera ? "is-active" : ""}`}
          onClick={handleClickActiveCameraButton}
        >
          Active Camera
        </button>
      </div>

      <style jsx>{`
        .page-webar {
          width: 100%;
          height: 100%;
          background-color: #555;
          position: absolute;
        }

        .main {
          width: 100%;
          height: 100%;
          position: relative;
          z-index: 1;
        }

        .modal {
          max-width: 320px;
          width: 100%;
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

        .background-video {
          width: 100%;
          height: 100%;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 0;

          background-color: rgba(red, 0.5);
        }

        .button-container {
          position: fixed;
          bottom: 0;
          left: 0;
          z-index: 100;
        }

        .active-camera-button {
          background-color: #333;
          display: block;
          padding: 8px 16px;
        }
      `}</style>
    </div>
  );
};

export default WebAR;
