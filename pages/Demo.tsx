import React, { useEffect, useRef, useState, Fragment, Suspense } from "react";
import * as THREE from "three";
import Script from "next/script";

const Demo = () => {
  const modelViewerRef = useRef<any>(null);
  const [isPageMounted, setPageMounted] = useState(false);

  const [message, setMessage] = useState("no message");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPageMounted(true);

      modelViewerRef.current?.addEventListener("ar-status", (event: any) => {
        setMessage(event.detail.status);
      });
    }
  }, []);

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
          React.createElement(
            "model-viewer",
            {
              ref: modelViewerRef,
              ar: true,
              "ar-modes": "webxr",
              "camera-controls": true,
              "enable-pan": false,
              id: "model-viewer",
              src: "Horse.glb",
              autoplay: true,
              style: {
                height: "100%",
                width: "100%",
                position: "absolute",
                inset: "0 0 0 0",
              },
            },
            <Fragment>
              <div id='text' className='text'>
                {message}
              </div>
            </Fragment>
          )}
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          background-color: #555;
          position: absolute;
        }

        .text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: red;
        }
      `}</style>
    </>
  );
};

export default Demo;
