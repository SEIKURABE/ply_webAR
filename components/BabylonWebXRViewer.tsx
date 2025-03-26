"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import * as BABYLON from "@babylonjs/core";
import "@babylonjs/loaders";
import "@babylonjs/core/XR/motionController";

interface SPZARViewerProps {
  modelUrls: string[];
  frameDuration?: number;
}

const BabylonWebXRViewer: React.FC<SPZARViewerProps> = ({
  modelUrls,
  frameDuration = 100,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<BABYLON.Scene | null>(null);
  const engineRef = useRef<BABYLON.Engine | null>(null);
  const modelContainersRef = useRef<BABYLON.AssetContainer[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadedFiles, setLoadedFiles] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isARSupported, setIsARSupported] = useState(false);
  const [isARActive, setIsARActive] = useState(false);
  const lastSwitchTime = useRef(performance.now());
  const animationFrameId = useRef<number | null>(null);
  const xrHelperRef = useRef<BABYLON.WebXRDefaultExperience | null>(null);

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

  const loadModels = useCallback(async () => {
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

    if (modelContainersRef.current.length > 0) {
      modelContainersRef.current.forEach((model) => {
        model.addAllToScene();
        setLoadedFiles((prev) => prev + 1);
      });
    }

    scene.executeWhenReady(() => {
      requestAnimationFrame(() => setIsLoading(false));
      startAnimationLoop();
    });
  }, [modelUrls, startAnimationLoop]);

  const initializeAR = useCallback(async () => {
    if (!sceneRef.current) return;

    try {
      const xrHelper = await BABYLON.WebXRDefaultExperience.CreateAsync(
        sceneRef.current,
        {
          uiOptions: {
            sessionMode: "immersive-ar",
            referenceSpaceType: "local-floor",
          },
          optionalFeatures: true,
        }
      );

      xrHelperRef.current = xrHelper;

      xrHelper.baseExperience.onStateChangedObservable.add((state) => {
        setIsARSupported(state !== BABYLON.WebXRState.NOT_IN_XR);
        setIsARActive(state === BABYLON.WebXRState.IN_XR);
      });

      // Ensure models are positioned on the floor
      xrHelper.teleportation.attach();
    } catch (error) {
      console.error("AR initialization error:", error);
      setIsARSupported(false);
    }
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;
    const engine = new BABYLON.Engine(canvasRef.current, true);
    engineRef.current = engine;
    const scene = new BABYLON.Scene(engine);
    sceneRef.current = scene;

    // Create a root mesh to hold all models
    const rootMesh = new BABYLON.TransformNode("root", scene);

    // Camera setup for both AR and non-AR
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

    // Load models and initialize AR
    loadModels();
    initializeAR();

    engine.runRenderLoop(() => {
      scene.render();
    });

    window.addEventListener("resize", () => engine.resize());

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (xrHelperRef.current) {
        xrHelperRef.current.dispose();
      }
      if (engineRef.current) {
        engineRef.current.stopRenderLoop();
        engineRef.current.dispose();
      }
      if (sceneRef.current) {
        sceneRef.current.meshes.forEach((mesh) => mesh.dispose());
        sceneRef.current.dispose();
      }
      modelContainersRef.current = [];
      sceneRef.current = null;
      engineRef.current = null;
    };
  }, [modelUrls, loadModels, initializeAR]);

  useEffect(() => {
    if (sceneRef.current && modelContainersRef.current.length > 0) {
      const currentModel = modelContainersRef.current[currentIndex];
      if (!currentModel) return;

      modelContainersRef.current.forEach((container, index) => {
        if (index === currentIndex) {
          container.addAllToScene();
          // Adjust model placement for AR
          container.rootNodes.forEach((node) => {
            if (node instanceof BABYLON.TransformNode) {
              node.position.y = 0; // Place on floor
              node.scaling.setAll(0.5); // Scale down for AR
            }
          });
        } else {
          container.removeAllFromScene();
        }
      });
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
      {!isARSupported && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            background: "rgba(255, 0, 0, 0.7)",
            color: "white",
            padding: "10px",
            textAlign: "center",
            fontSize: "14px",
          }}
        >
          AR is not supported on this device
        </div>
      )}
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
      {isARSupported && !isARActive && (
        <button
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "10px 20px",
            background: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => {
            if (xrHelperRef.current) {
              xrHelperRef.current.baseExperience.enterXRAsync(
                "immersive-ar",
                "local-floor"
              );
            }
          }}
        >
          Enter AR
        </button>
      )}
    </div>
  );
};

export default BabylonWebXRViewer;
