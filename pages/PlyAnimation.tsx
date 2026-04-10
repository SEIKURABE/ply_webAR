import React from "react";
import dynamic from "next/dynamic";

import PLYAnimationViewer from "../components/PLYAnimationViewer";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  const plyUrls = Array.from(
    { length: 50 },
    (_, i) => `${basePath}/model/demo/frames/frame${i}.ply`,
  );

  return (
    <div style={{ width: "100%", height: "100%", position: "absolute" }}>
      <PLYAnimationViewer modelUrls={plyUrls} />
    </div>
  );
}
