import React, { useEffect, useRef, useState, Suspense } from "react";

import PLYViewer from "../components/PLYViewer";

import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || "";

const App = () => {
  const plyUrl = `${basePath}/model/demo/frames/frame17.ply`;

  return (
    <div className='page-index'>
      <PLYViewer modelUrl={plyUrl} />

      <style jsx global>{`
        .page-index {
          width: 100%;
          height: 100%;
          background-color: #fff;
          position: absolute;
        }
      `}</style>
    </div>
  );
};

export default App;
