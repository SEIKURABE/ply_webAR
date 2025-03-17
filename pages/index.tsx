import React, { useEffect, useRef, useState, Suspense } from "react";
import Link from "next/link";

import PLYViewer from "../components/PLYViewer";

const App = () => {
  const plyUrl = "model/demo/frames/frame17.ply";

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
