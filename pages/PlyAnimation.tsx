import React from "react";
import dynamic from "next/dynamic";

import PLYAnimationViewer from "../components/PLYAnimationViewer";

import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || "";

export default function Home() {
  const plyUrls = Array.from(
    { length: 50 },
    (_, i) => `${basePath}/model/demo/frames/frame${i}.ply`
  );

  return (
    <div style={{ width: "100%", height: "100%", position: "absolute" }}>
      <PLYAnimationViewer modelUrls={plyUrls} />
    </div>
  );
}
