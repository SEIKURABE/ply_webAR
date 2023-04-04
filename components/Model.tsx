import React, { useEffect, useRef, useState, Suspense } from "react";
import * as THREE from "three";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";

import { addUrlPrefix } from "../util/addUrlPrefix";

export const Model: React.FunctionComponent<{ rotation?: any }> = ({
  rotation,
}) => {
  const plyRef: any = useRef(null);
  const plyData = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const loader = new PLYLoader();
  const modelPath = addUrlPrefix("/model/demo.ply");

  loader.load(
    modelPath,
    (geometry: any) => {
      geometry.center(); // 中心点を原点に移動

      const material = new THREE.PointsMaterial({
        size: 0.2,
        vertexColors: true,
      });

      const points: any = new THREE.Points(geometry, material);
      plyData.current = points;

      setLoaded(true);
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    (error) => {
      console.log(error);
    }
  );

  useEffect(() => {
    if (plyData.current) {
      plyRef.current.add(plyData.current);
    }
  }, [loaded]);

  return (
    <group dispose={null}>
      <mesh ref={plyRef} rotation={rotation} />
    </group>
  );
};
