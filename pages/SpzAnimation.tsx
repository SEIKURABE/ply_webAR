import React from "react";
import dynamic from "next/dynamic";

import BabylonSPZViewer from "../components/BabylonSPZAnimationViewer";

export default function Home() {
  const spzUrls = Array.from({ length: 3 }, (_, i) => `spz/spz${i + 1}.spz`);

  return (
    <div style={{ width: "100%", height: "100%", position: "absolute" }}>
      <BabylonSPZViewer modelUrls={spzUrls} />
    </div>
  );
}
