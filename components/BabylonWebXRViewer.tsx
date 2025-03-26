import { useEffect, useRef, useState, useCallback } from "react";
import * as BABYLON from "@babylonjs/core";
import "@babylonjs/loaders";
import "@babylonjs/core/XR/webXRDefaultExperience";

const BabylonWebXRViewer: React.FC<{
  modelUrls: string[];
  frameDuration?: number;
}> = ({ modelUrls, frameDuration = 100 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<BABYLON.Scene | null>(null);
  const engineRef = useRef<BABYLON.Engine | null>(null);
  const modelContainersRef = useRef<BABYLON.AssetContainer[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastSwitchTime = useRef(performance.now());
  let animationFrameId = useRef<number | null>(null);

  const startAnimationLoop = useCallback(() => {
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
  }, [frameDuration]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const engine = new BABYLON.Engine(canvasRef.current, true);
    engineRef.current = engine;
    const scene = new BABYLON.Scene(engine);
    sceneRef.current = scene;

    // **WebXRのセットアップ**
    BABYLON.WebXRDefaultExperience.CreateAsync(scene).then((xrHelper) => {
      console.log("WebXR Ready!", xrHelper);
    });

    // **ライトの追加**
    new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);

    // **モデルのロード**
    const loadModels = async () => {
      const loadedModels = await Promise.all(
        modelUrls.map((url) =>
          BABYLON.SceneLoader.LoadAssetContainerAsync("", url, scene).catch(
            (err) => {
              console.error("Error loading SPZ model:", err);
              return null;
            }
          )
        )
      );
      modelContainersRef.current = loadedModels.filter(
        Boolean
      ) as BABYLON.AssetContainer[];
      if (modelContainersRef.current.length > 0) startAnimationLoop();
    };

    loadModels();

    engine.runRenderLoop(() => {
      scene.render();
    });

    window.addEventListener("resize", () => engine.resize());

    return () => {
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
      engine.dispose();
    };
  }, [modelUrls, startAnimationLoop]);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};

export default BabylonWebXRViewer;
