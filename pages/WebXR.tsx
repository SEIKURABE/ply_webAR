import React from "react";
import dynamic from "next/dynamic";

import BabylonWebXRViewer from "../components/BabylonWebXRViewer";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  const spzUrls = Array.from(
    { length: 3 },
    (_, i) => `${basePath}/spz/spz${i + 1}.spz`,
  );

  return (
    <div style={{ width: "100%", height: "100%", position: "absolute" }}>
      <BabylonWebXRViewer modelUrls={spzUrls} />
    </div>
  );
}
