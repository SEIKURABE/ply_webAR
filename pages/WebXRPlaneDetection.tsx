import React from "react";
import dynamic from "next/dynamic";

const BabylonSPZViewerTest = dynamic(
  () => import("../components/BabylonSPZPlaneDetection"),
  {
    ssr: false,
  },
);

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  const url = `${basePath}/spz/spz2.spz`;

  return (
    <div style={{ width: "100%", height: "100%", position: "absolute" }}>
      <BabylonSPZViewerTest modelUrl={url} />
    </div>
  );
}
