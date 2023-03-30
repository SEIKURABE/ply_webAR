import React, { useEffect, useRef, useState, Suspense } from "react";
import * as THREE from "three";
import Script from "next/script";

const Demo = () => {
  const modelViewerRef = useRef(null);
  const [isPageMounted, setPageMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPageMounted(true);
    }
  }, []);

  useEffect(() => {
    if (isPageMounted) {
      modelViewerRef.current?.addEventListener("load", () => {
        console.log("loaddddd");
      });
    }
  }, [isPageMounted]);

  return (
    <>
      <Script
        type='module'
        src='https://ajax.googleapis.com/ajax/libs/model-viewer/3.0.1/model-viewer.min.js'
        onLoad={() => {
          console.log("Script has loaded");
        }}
      />

      <div className='container'>
        {isPageMounted &&
          React.createElement("model-viewer", {
            ref: modelViewerRef,
            ar: true,
            bounds: "tight",
            "camera-controls": true,
            "enable-pan": false,
            "environment-image": "neutral",
            id: "viewer",
            src: "Horse.glb",
            autoplay: true,
            style: {
              height: "100%",
              width: "100%",
              position: "absolute",
              inset: "0 0 0 0",
            },
          })}
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          background-color: #555;
          position: absolute;
        }
      `}</style>
    </>
  );
};

export default Demo;
