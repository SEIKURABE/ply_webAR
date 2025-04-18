import React from "react";
import dynamic from "next/dynamic";

import getConfig from "next/config";

const BabylonSPZViewerTest = dynamic(
  () => import("../components/BabylonSPZViewerTest"),
  {
    ssr: false,
  }
);

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || "";

export default function Home() {
  const url = `${basePath}/spz/spz2.spz`;

  return (
    <div style={{ width: "100%", height: "100%", position: "absolute" }}>
      <BabylonSPZViewerTest modelUrl={url} />
    </div>
  );
}
