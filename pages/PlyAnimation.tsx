import React from "react";
import dynamic from "next/dynamic";

import PLYAnimationViewer from "../components/PLYAnimationViewer";

export default function Home() {
  const plyUrls = Array.from(
    { length: 50 },
    (_, i) => `model/demo/frames/frame${i}.ply`
  );

  return (
    <div style={{ width: "100%", height: "100%", position: "absolute" }}>
      <PLYAnimationViewer modelUrls={plyUrls} />
    </div>
  );
}
