"use client";
import { useEffect, useRef, useState } from "react";
import * as BABYLON from "@babylonjs/core";
import "@babylonjs/loaders";
import WebXRPolyfill from "webxr-polyfill";

const BabylonSPZViewer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<BABYLON.Engine | null>(null);
  const sceneRef = useRef<BABYLON.Scene | null>(null);
  const [xrHelper, setXRHelper] =
    useState<BABYLON.WebXRDefaultExperience | null>(null);
  const [isXRSupported, setIsXRSupported] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    new WebXRPolyfill();
    setIsIOS(/iPhone|iPad|iPod/i.test(navigator.userAgent));

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
      `}</style>
    </div>
  );
};

export default BabylonSPZViewer;
