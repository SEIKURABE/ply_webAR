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

      // await xrHelper.baseExperience.enterXRAsync(
      //   "immersive-ar",
      //   "local-floor",
      //   xrHelper.renderTarget
      // );

      // // 平面検出機能を有効に
      // const featuresManager = xrHelper.baseExperience.featuresManager;
      // const planeDetector = featuresManager.enableFeature(
      //   BABYLON.WebXRFeatureName.PLANE_DETECTION,
      //   "latest",
      //   {
      //     preferredDetectorOptions: {
      //       // 平面のサイズや方向の検出条件（任意で調整可能）
      //     },
      //     outputMeshDescriptors: {
      //       visible: true, // デバッグ時はtrueに
      //       pickable: true, // ドラッグ対象にするため
      //       classification: true,
      //       attributes: true,
      //     },
      //   }
      // ) as BABYLON.WebXRPlaneDetector;

      // planeDetector.onPlaneAddedObservable.add((plane: any) => {
      //   const mesh = plane.xrPlaneMesh;
      //   if (mesh) {
      //     const mat = new BABYLON.StandardMaterial("planeMat", scene);
      //     mat.diffuseColor = new BABYLON.Color3(0.2, 0.8, 1); // 明るい青
      //     mat.alpha = 0.3;
      //     mesh.material = mat;
      //   }
      // });

      // // モデルの親Mesh
      // const rootMesh = new BABYLON.Mesh("root", scene);
      // loadedModel.meshes.forEach((mesh) => {
      //   if (mesh.name !== "root") {
      //     mesh.parent = rootMesh;
      //   }
      // });
      // rootMesh.scaling = new BABYLON.Vector3(1, 1, 1);
      // rootMesh.position = new BABYLON.Vector3(0, 0.1, 0);

      loadedModel.addAllToScene();

      // ドラッグ制御
      // let isDragging = false;

      // scene.onPointerObservable.add((pointerInfo) => {
      //   if (xrHelper.baseExperience.state !== BABYLON.WebXRState.IN_XR) return;

      //   switch (pointerInfo.type) {
      //     case BABYLON.PointerEventTypes.POINTERDOWN:
      //       isDragging = true;
      //       break;

      //     case BABYLON.PointerEventTypes.POINTERUP:
      //       isDragging = false;
      //       break;

      //     case BABYLON.PointerEventTypes.POINTERMOVE:
      //       if (!isDragging) return;

      //       const pickResult = scene.pick(
      //         scene.pointerX,
      //         scene.pointerY,
      //         (mesh) => mesh.name.startsWith("xr-plane-mesh") // 平面Meshのみを対象に
      //       );

      //       if (pickResult?.hit && pickResult.pickedPoint) {
      //         const { x, z } = pickResult.pickedPoint;
      //         rootMesh.position.x = x;
      //         rootMesh.position.z = z;
      //         // Yは固定、平面にフィットするならpickResult.pickedPoint.yも使える
      //       }
      //       break;
      //   }
      // });
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
