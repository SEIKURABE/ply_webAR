"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import * as BABYLON from "@babylonjs/core";
import "@babylonjs/loaders";
import "@babylonjs/core/XR/motionController";

interface SPZARViewerProps {
  modelUrls: string[];
  frameDuration?: number;
  modelScale?: number;
}

const BabylonWebXRViewer: React.FC<SPZARViewerProps> = ({
  modelUrls,
  frameDuration = 100, // モデル切り替え間隔（ミリ秒）
  modelScale = 0.5, // ARでのモデルサイズ
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

  // モデル自動切り替えアニメーションループ
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

  // モデル読み込み
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
          console.error("SPZモデル読み込みエラー:", error);
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

  // AR初期化
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

      // xrHelper.baseExperience.onStateChangedObservable.add((state) => {
      //   setIsARSupported(state !== BABYLON.WebXRState.NOT_IN_XR);
      //   setIsARActive(state === BABYLON.WebXRState.IN_XR);
      // });

      // 床へのテレポート設定
      xrHelper.teleportation.attach();
    } catch (error) {
      console.error("AR初期化エラー:", error);
      setIsARSupported(false);
    }
  }, []);

  // モデル配置と切り替え
  useEffect(() => {
    if (sceneRef.current && modelContainersRef.current.length > 0) {
      const currentModel = modelContainersRef.current[currentIndex];
      if (!currentModel) return;

      modelContainersRef.current.forEach((container, index) => {
        if (index === currentIndex) {
          container.addAllToScene();
          // AR用のモデル配置調整
          container.rootNodes.forEach((node) => {
            if (node instanceof BABYLON.TransformNode) {
              node.position.y = 0; // 床に配置
              node.scaling.setAll(modelScale); // スケール調整
            }
          });
        } else {
          container.removeAllFromScene();
        }
      });
    }
  }, [currentIndex, modelScale, isARActive]);

  // シーン初期化
  useEffect(() => {
    if (!canvasRef.current) return;
    const engine = new BABYLON.Engine(canvasRef.current, true);
    engineRef.current = engine;
    const scene = new BABYLON.Scene(engine);
    sceneRef.current = scene;

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

    // ライト設定
    const light = new BABYLON.HemisphericLight(
      "light",
      new BABYLON.Vector3(1, 1, 0),
      scene
    );
    light.intensity = 0.7;

    // モデル読み込みとAR初期化
    loadModels();
    initializeAR();

    // レンダリングループ
    engine.runRenderLoop(() => {
      scene.render();
    });

    // リサイズ対応
    window.addEventListener("resize", () => engine.resize());

    // クリーンアップ
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

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* 読み込み中表示 */}
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
            モデル読み込み中 {loadedFiles}/{modelUrls.length}...
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

      {/* メインキャンバス */}
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />

      {/* AR起動ボタン */}
      {isARActive && (
        <button
          style={{
            position: "absolute",
            bottom: "56px",
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
          ARを起動
        </button>
      )}
    </div>
  );
};

export default BabylonWebXRViewer;
