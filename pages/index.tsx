import React, { useEffect, useRef, useState, Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Points, Preload } from "@react-three/drei";

import PLYViewer from "../components/PLYAnimationViewer";

const App = () => {
  const plyUrls = Array.from(
    { length: 100 },
    (_, i) => `/model/demo/frames/frame${i}.ply`
  );

  const plyUrl = ["/model/demo/frames/frame17.ply"];

  return (
    <div className='page-index'>
      <PLYViewer modelUrls={plyUrls} />
      {/* <PLYViewer modelUrl={plyUrl} /> */}

      <div className='menu'>
        <a href='BabylonSpz'>BabylonSpz</a>
        {/* <a href='MV'>MV</a> */}
        {/* <a href='MV_Other'>MV_Other</a> */}
        {/* <a href='MV_WebXR'>MV_WebXR</a> */}
        <a href='aframe'>aframe</a>
        <a href='marker'>marker</a>
        <a href='markerless'>markerless</a>
      </div>

      <style jsx>{`
        .page-index {
          width: 100%;
          height: 100%;
          background-color: #000;
          position: absolute;
        }

        .menu {
          background-color: #222;
          list-style: none;
          padding: 16px;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 100;
        }

        .menu a {
          color: #fff;
        }

        .menu a + a {
          margin-left: 16px;
        }
      `}</style>
    </div>
  );
};

export default App;
