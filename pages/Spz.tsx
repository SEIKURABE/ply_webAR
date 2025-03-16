import React from "react";
import dynamic from "next/dynamic";

const BabylonViewer = dynamic(() => import("../components/BabylonSPZViewer"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <main className='flex justify-center items-center h-screen'>
        <BabylonViewer />
      </main>
    </>
  );
}
