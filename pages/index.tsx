import React, { useEffect, useRef, useState, Suspense } from "react";

import PLYViewer from "../components/PLYViewer";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

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
