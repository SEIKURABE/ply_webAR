"use client";
import { useEffect, useRef, useState } from "react";
import * as BABYLON from "@babylonjs/core";
import "@babylonjs/loaders";
import WebXRPolyfill from "webxr-polyfill";

const BabylonSPZViewer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<BABYLON.Engine | null>(null);
  const sceneRef = useRef<BABYLON.Scene | null>(null);
  const [isXRSupported, setIsXRSupported] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    new WebXRPolyfill();

    const engine = new BABYLON.Engine(canvasRef.current, true, {
      preserveDrawingBuffer: true,
      stencil: true,
    });
    engine.setHardwareScalingLevel(1 / window.devicePixelRatio);
    engineRef.current = engine;

    const scene = new BABYLON.Scene(engine);
    scene.useRightHandedSystem = true;
    scene.skipPointerMovePicking = true;
    scene.blockMaterialDirtyMechanism = true;
    scene.useConstantAnimationDeltaTime = true;
    sceneRef.current = scene;

    // XRサポートの確認を追加
    BABYLON.WebXRSessionManager.IsSessionSupportedAsync("immersive-vr")
      .then((supported) => {
        console.log("xr supported----", supported);

        setIsXRSupported(supported);
      })
      .catch(() => {
        setIsXRSupported(false);
      });

    const camera = new BABYLON.ArcRotateCamera(
      "camera",
      Math.PI / 2,
      Math.PI / 4,
      5,
      BABYLON.Vector3.Zero(),
      scene
    );
    camera.attachControl(canvasRef.current, true);
    camera.minZ = 0.1;
    camera.maxZ = 100;

    const light = new BABYLON.HemisphericLight(
      "light",
      new BABYLON.Vector3(1, 1, 0),
      scene
    );
    light.intensity = 0.7;

    BABYLON.SceneLoader.ImportMeshAsync("", "spz/", "spz1.spz", scene)
      .then(({ meshes }) => {
        meshes.forEach((mesh) => mesh.freezeWorldMatrix());
        console.log("SPZ model loaded!");
      })
      .catch((error) => console.error("Error loading SPZ model:", error));

    scene.freezeActiveMeshes();
    scene.materials.forEach((material) => material.freeze());

    engine.runRenderLoop(() => {
      scene.render();
    });

    const resizeHandler = () => engine.resize();
    window.addEventListener("resize", resizeHandler);

    return () => {
      // クリーンアップ処理
      window.removeEventListener("resize", resizeHandler);
      engine.stopRenderLoop();
      scene.dispose();
      engine.dispose();
      engineRef.current = null;
      sceneRef.current = null;
      console.log("Babylon.js resources cleaned up.");
    };
  }, []);

  const startAR = async () => {
    if (!sceneRef.current) return;

    try {
      const xr = await sceneRef.current.createDefaultXRExperienceAsync({
        uiOptions: {
          sessionMode: "immersive-ar",
        },
      });

      // AR session開始時の処理
      xr.baseExperience.onStateChangedObservable.add((state) => {
        if (state === BABYLON.WebXRState.IN_XR) {
          // ARセッション開始時の処理
          console.log("AR session started");
        }
      });

      await xr.baseExperience.enterXRAsync("immersive-ar", "local-floor");
    } catch (error) {
      console.error("AR start failed:", error);
    }
  };

  return (
    <>
      <canvas ref={canvasRef} className='w-full h-full'></canvas>
      {isXRSupported && (
        <button onClick={startAR} className='ar-button'>
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

        .ar-buttton {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;
        }
      `}</style>
    </>
  );
};

export default BabylonSPZViewer;
