"use client";
import { useEffect, useRef, useState } from "react";
import * as BABYLON from "@babylonjs/core";
import "@babylonjs/loaders";

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
  const modelContainersRef = useRef<BABYLON.AssetContainer[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadedFiles, setLoadedFiles] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const lastSwitchTime = useRef(performance.now());
  let animationFrameId = useRef<number | null>(null);

  const loadModels = async () => {
    if (!sceneRef.current) return;
    setIsLoading(true);
    setLoadedFiles(0);
    const scene = sceneRef.current;

    const loadedModels = await Promise.all(
      modelUrls.map(async (url, index) => {
        try {
          const model = await BABYLON.SceneLoader.LoadAssetContainerAsync(
            "",
            url,
            scene,
            (event) => {
              if (event.lengthComputable) {
                const progress = (event.loaded / event.total) * 100;
                setLoadingProgress(Math.round(progress));
              }
            }
          );
          setLoadedFiles((prev) => prev + 1);
          return model;
        } catch (error) {
          console.error("Error loading SPZ model:", error);
          return null;
        }
      })
    );

    modelContainersRef.current = loadedModels.filter(
      Boolean
    ) as BABYLON.AssetContainer[];
    setIsLoading(false);

    // 最初のモデルを追加
    if (modelContainersRef.current.length > 0) {
      modelContainersRef.current[0].addAllToScene();
    }
    startAnimationLoop();
  };

  const startAnimationLoop = () => {
    const animate = () => {
      const now = performance.now();
      if (now - lastSwitchTime.current > frameDuration) {
        lastSwitchTime.current = now;
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % modelContainersRef.current.length
        );
      }
      animationFrameId.current = requestAnimationFrame(animate);
    };
    animationFrameId.current = requestAnimationFrame(animate);
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

    loadModels();

    engine.runRenderLoop(() => {
      scene.render();
    });

    window.addEventListener("resize", () => engine.resize());

    return () => {
      engine.dispose();
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [modelUrls]);

  useEffect(() => {
    if (sceneRef.current && modelContainersRef.current.length > 0) {
      const currentModel = modelContainersRef.current[currentIndex];
      if (!currentModel) return;

      // 前のモデルをシーンから削除
      modelContainersRef.current.forEach((container, index) => {
        if (index !== currentIndex) {
          container.removeAllFromScene();
        }
      });

      // 新しいモデルをシーンに追加
      currentModel.addAllToScene();
    }
  }, [currentIndex]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {isLoading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            background: "rgba(0, 0, 0, 0.7)",
            color: "white",
            padding: "10px",
            textAlign: "center",
            fontSize: "14px",
          }}
        >
          <p>
            Loading {loadedFiles}/{modelUrls.length} models...
          </p>
          <div style={{ width: "100%", background: "#ccc", height: "5px" }}>
            <div
              style={{
                width: `${loadingProgress}%`,
                height: "100%",
                background: "#76c7c0",
              }}
            />
          </div>
        </div>
      )}
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default BabylonSPZViewer;
