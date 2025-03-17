"use client";
import { useEffect, useRef, useState } from "react";
import * as BABYLON from "@babylonjs/core";
import "@babylonjs/loaders";
import { useFrame } from "@react-three/fiber";

interface SPZViewerProps {
  modelUrls: string[];
  frameDuration?: number;
}

const BabylonSPZViewer: React.FC<SPZViewerProps> = ({
  modelUrls,
  frameDuration = 100,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<BABYLON.Scene | null>(null);
  const modelContainerRef = useRef<BABYLON.AssetContainer | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const loadModel = async (url: string) => {
    if (!sceneRef.current) return;

    try {
      const newModelContainer =
        await BABYLON.SceneLoader.LoadAssetContainerAsync(
          url,
          "",
          sceneRef.current
        );

      // 既存のモデルを残しながら新しいモデルを追加
      newModelContainer.addAllToScene();

      // 旧モデルがあれば削除
      if (modelContainerRef.current) {
        setTimeout(() => {
          modelContainerRef.current?.dispose();
          modelContainerRef.current = newModelContainer;
        }, 50); // すぐに削除せず少し待つ
      } else {
        modelContainerRef.current = newModelContainer;
      }
    } catch (error) {
      console.error("Error loading SPZ model:", error);
    }
  };

  useEffect(() => {
    if (!canvasRef.current) return;
    const engine = new BABYLON.Engine(canvasRef.current, true);
    const scene = new BABYLON.Scene(engine);
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

    const light = new BABYLON.HemisphericLight(
      "light",
      new BABYLON.Vector3(1, 1, 0),
      scene
    );
    light.intensity = 0.7;

    loadModel(modelUrls[currentIndex]);

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % modelUrls.length);
    }, frameDuration);

    engine.runRenderLoop(() => {
      scene.render();
    });

    window.addEventListener("resize", () => engine.resize());

    return () => {
      clearInterval(interval);
      engine.dispose();
    };
  }, [modelUrls, frameDuration]); // currentIndex は依存関係に入れない

  useEffect(() => {
    if (sceneRef.current) {
      loadModel(modelUrls[currentIndex]);
    }
  }, [currentIndex]); // modelUrls, frameDuration を依存関係から除外

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};

export default BabylonSPZViewer;
