"use client";
import { useEffect, useRef, useState } from "react";
import * as BABYLON from "@babylonjs/core";
import "@babylonjs/loaders";
import WebXRPolyfill from "webxr-polyfill";

const BabylonViewer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [xrHelper, setXRHelper] =
    useState<BABYLON.WebXRDefaultExperience | null>(null);
  const [isXRSupported, setIsXRSupported] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    // **WebXR Polyfillを適用**
    if (typeof window !== "undefined") {
      new WebXRPolyfill();
    }

    // **iOS判定**
    setIsIOS(/iPhone|iPad|iPod/i.test(navigator.userAgent));

    const initScene = async () => {
      const engine = new BABYLON.Engine(canvasRef.current, true);
      const scene = new BABYLON.Scene(engine);

      // カメラ設定
      const camera = new BABYLON.ArcRotateCamera(
        "camera",
        Math.PI / 2,
        Math.PI / 4,
        5,
        BABYLON.Vector3.Zero(),
        scene
      );
      camera.attachControl(canvasRef.current, true);

      // 環境ライト
      const light = new BABYLON.HemisphericLight(
        "light",
        new BABYLON.Vector3(1, 1, 0),
        scene
      );
      light.intensity = 0.7;

      try {
        // **SPZモデルのロード**
        const container = await BABYLON.SceneLoader.LoadAssetContainerAsync(
          "spz/spz1.spz",
          ""
        );
        container.addAllToScene();
        console.log("SPZ model loaded!");
      } catch (error) {
        console.error("Error loading SPZ model:", error);
      }

      // **WebXR (AR) 機能のセットアップ**
      try {
        const xrExperience = await scene.createDefaultXRExperienceAsync();
        setXRHelper(xrExperience);

        if (xrExperience.baseExperience) {
          setIsXRSupported(true);
          console.log("WebXR is supported!");
        }
      } catch (error) {
        console.error("Failed to initialize WebXR:", error);
      }

      // シーンのレンダリングループ
      engine.runRenderLoop(() => {
        scene.render();
      });

      window.addEventListener("resize", () => engine.resize());

      return () => {
        engine.dispose();
      };
    };

    initScene();
  }, []);

  // **Android / PC用: WebXR ARモード開始**
  const startAR = async () => {
    if (!xrHelper || !xrHelper.baseExperience) {
      alert("AR is not supported on this device.");
      return;
    }

    try {
      await xrHelper.baseExperience.enterXRAsync("immersive-ar", "local-floor");
      console.log("AR mode started!");
    } catch (error) {
      console.error("Failed to enter AR mode:", error);
      alert("WebXR AR is not supported on this device.");
    }
  };

  return (
    <div className='relative w-full h-full flex justify-center items-center'>
      <canvas ref={canvasRef} className='w-full h-full'></canvas>

      {/* Android/PC向け WebXR ARボタン */}
      {isXRSupported && (
        <button
          onClick={startAR}
          className='absolute bottom-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition'
        >
          Start AR Mode
        </button>
      )}

      <style jsx global>{`
        canvas {
          width: 100%;
          height: 100%;
          background-color: #000;
          position: absolute;
          z-index: -1;
        }

        button {
          background-color: crimson;
          padding: 16px;
        }
      `}</style>
    </div>
  );
};

export default BabylonViewer;
