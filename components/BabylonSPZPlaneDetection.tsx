"use client";
import { useEffect, useRef, useState } from "react";
import * as BABYLON from "@babylonjs/core";
import "@babylonjs/loaders";

interface SPZViewerProps {
  modelUrl: string;
  frameDuration?: number;
}

const BabylonSPZViewerTest: React.FC<SPZViewerProps> = ({ modelUrl }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [planeDetected, setPlaneDetected] = useState(false);
  const [xrSessionActive, setXrSessionActive] = useState(false);
  const planeDetectedRef = useRef(false);
  const pendingPlacementRef = useRef(false);
  const lastHitResultRef = useRef<BABYLON.IWebXRHitResult | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    let engine = new BABYLON.Engine(canvasRef.current, true);
    let scene = new BABYLON.Scene(engine);
    let xrPlaneDetector: BABYLON.WebXRPlaneDetector | null = null;
    let xrHitTest: BABYLON.WebXRHitTest | null = null;
    let loadedModelContainer: BABYLON.AssetContainer | null = null;
    let modelRoot: BABYLON.TransformNode | null = null;
    let pointerObserver: BABYLON.Nullable<
      BABYLON.Observer<BABYLON.PointerInfo>
    > = null;

    // カメラの設定
    const camera = new BABYLON.ArcRotateCamera(
      "camera",
      Math.PI / 2,
      Math.PI / 4,
      5,
      BABYLON.Vector3.Zero(),
      scene
    );
    camera.attachControl(canvasRef.current, true);

    // ライトの設定
    const light = new BABYLON.HemisphericLight(
      "light",
      new BABYLON.Vector3(1, 1, 0),
      scene
    );
    light.intensity = 0.7;

    // モデルの読み込みとWebXRの設定
    (async () => {
      // モデルを読み込み
      loadedModelContainer = await BABYLON.SceneLoader.LoadAssetContainerAsync(
        "",
        modelUrl,
        scene
      );

      // ルートノードを作成（モデル配置用）
      modelRoot = new BABYLON.TransformNode("modelRoot", scene);

      // モデルをシーンに追加せず、後で配置するために保持
      // この時点ではモデルをシーンに追加しない

      // WebXR設定
      const xrHelper = await scene.createDefaultXRExperienceAsync({
        uiOptions: {
          sessionMode: "immersive-ar",
          referenceSpaceType: "local-floor",
        },
        optionalFeatures: ["hit-test", "anchors", "plane-detection"],
      });

      // AR入力ソースが変更されたときのイベント（セッション開始検出）
      xrHelper.baseExperience.sessionManager.onXRSessionInit.add(() => {
        setXrSessionActive(true);
      });

      // ARセッションが終了したときのイベント
      xrHelper.baseExperience.sessionManager.onXRSessionEnded.add(() => {
        setXrSessionActive(false);
        setPlaneDetected(false);
        planeDetectedRef.current = false;
        pendingPlacementRef.current = false;
        lastHitResultRef.current = null;
      });

      // 平面検出機能の追加
      if (
        xrHelper.baseExperience.featuresManager.enableFeature(
          BABYLON.WebXRPlaneDetector,
          "latest",
          {
            createPlaneIndicator: true, // 平面を視覚化
            xrInput: xrHelper.input,
            // 平面の視覚化オプション
            planeIndicatorOptions: {
              size: 0.5, // 平面インジケーターのサイズ
              color: new BABYLON.Color3(0.2, 0.8, 0.4), // 緑色
            },
          }
        ) !== null
      ) {
        // 平面検出機能が有効になったら
        xrPlaneDetector =
          xrHelper.baseExperience.featuresManager.getEnabledFeature(
            "plane-detection"
          ) as BABYLON.WebXRPlaneDetector;

        // 平面が検出されたときのイベント
        xrPlaneDetector.onPlaneAddedObservable.add((plane) => {
          setPlaneDetected(true);
          planeDetectedRef.current = true;
        });

        // 平面上のタップを検出する
        pointerObserver = scene.onPointerObservable.add((pointerInfo) => {
          if (pointerInfo.type !== BABYLON.PointerEventTypes.POINTERDOWN) return;
          pendingPlacementRef.current = true;
        });
      }

      // ヒットテスト機能の追加（より正確な位置決め用）
      xrHitTest = xrHelper.baseExperience.featuresManager.enableFeature(
        BABYLON.WebXRHitTest,
        "latest",
        {
          enableTransientHitTest: true,
          entityTypes: ["plane"],
        }
      ) as BABYLON.WebXRHitTest;

      xrHitTest.onHitTestResultObservable.add((results) => {
        if (results.length > 0) {
          lastHitResultRef.current = results[0];
          if (!planeDetectedRef.current) {
            setPlaneDetected(true);
            planeDetectedRef.current = true;
          }
        }

        if (
          pendingPlacementRef.current &&
          lastHitResultRef.current &&
          loadedModelContainer &&
          modelRoot
        ) {
          pendingPlacementRef.current = false;

          // 既存のモデルを削除
          while (modelRoot.getChildren().length > 0) {
            modelRoot.getChildren()[0].dispose();
          }

          // モデルをシーンに追加
          const instantiated = loadedModelContainer.instantiateModelsToScene(
            (name) => name,
            false
          );
          instantiated.rootNodes.forEach((node) => {
            node.parent = modelRoot;
          });

          // モデルを選択位置に配置
          modelRoot.position.copyFrom(lastHitResultRef.current.position);
          modelRoot.rotationQuaternion =
            lastHitResultRef.current.rotationQuaternion.clone();

          // モデルのスケールを調整（必要に応じて）
          modelRoot.scaling = new BABYLON.Vector3(0.5, 0.5, 0.5);
        }
      });
    })();

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
        if (pointerObserver) {
          scene.onPointerObservable.remove(pointerObserver);
        }
        scene.meshes.forEach((mesh) => mesh.dispose());
        scene.dispose();
      }
    };
  }, [modelUrl]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
      {xrSessionActive && !planeDetected && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "rgba(0,0,0,0.7)",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          周囲の平面をスキャンしてください
        </div>
      )}
    </div>
  );
};

export default BabylonSPZViewerTest;
