"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import * as BABYLON from "@babylonjs/core";
import "@babylonjs/loaders";

interface SPZViewerProps {
  modelUrl: string;
  frameDuration?: number;
}

const BabylonSPZViewerTest: React.FC<SPZViewerProps> = ({ modelUrl }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    let engine = new BABYLON.Engine(canvasRef.current, true);
    let scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera(
      "camera",
      Math.PI / 2,
      Math.PI / 4,
      5,
      BABYLON.Vector3.Zero(),
      scene
    );
    camera.attachControl(canvasRef.current, true);

    const light = new BABYLON.HemisphericLight(
      "light",
      new BABYLON.Vector3(1, 1, 0),
      scene
    );
    light.intensity = 0.7;

    (async () => {
      const loadedModel = await BABYLON.SceneLoader.LoadAssetContainerAsync(
        "",
        modelUrl,
        scene
      );

      // WebXR設定
      const xrHelper = await scene.createDefaultXRExperienceAsync({
        uiOptions: { sessionMode: "immersive-ar" },
      });

      loadedModel.addAllToScene();
    })();

    // scene.debugLayer.show();

    engine.runRenderLoop(() => {
      scene.render();
    });

    window.addEventListener("resize", () => engine.resize());

    return () => {
      if (engine) {
        engine.stopRenderLoop();
        engine.dispose();
      }
      if (scene) {
        scene.meshes.forEach((mesh) => mesh.dispose());
        scene.dispose();
      }
    };
  }, [modelUrl]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default BabylonSPZViewerTest;
