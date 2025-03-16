import React, { useEffect, useRef, useState, Suspense } from "react";
import Link from "next/link";

import PLYViewer from "../components/PLYViewer";

const App = () => {
  const plyUrl = "/model/demo/frames/frame17.ply";

  return (
    <div className='page-index'>
      <PLYViewer modelUrl={plyUrl} />

      <div className='menu'>
        <Link className='alink' href='/'>
          Ply
        </Link>
        <Link className='alink' href='PlyAnimation'>
          PlyAnimation
        </Link>
        <Link className='alink' href='Spz'>
          Spz
        </Link>
        <Link className='alink' href='SpzAnimation'>
          SpzAnimation
        </Link>
      </div>

      <style jsx global>{`
        .page-index {
          width: 100%;
          height: 100%;
          background-color: #fff;
          position: absolute;
        }

        .menu {
          background-color: #222;
          list-style: none;
          padding: 16px;
          position: fixed;
          bottom: 0;
          left: 0;
          z-index: 100;
        }

        .alink {
          color: #fff;
        }

        .alink + .alink {
          margin-left: 16px;
        }
      `}</style>
    </div>
  );
};

export default App;
