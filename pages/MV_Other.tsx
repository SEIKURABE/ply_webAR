import React, { useEffect, useRef, useState, Fragment, Suspense } from "react";
import * as THREE from "three";
import Script from "next/script";

const Demo = () => {
  const modelViewerRef = useRef<any>(null);
  const [isPageMounted, setPageMounted] = useState(false);
  const [model, setModel] = useState("Horse.glb");
  const [message, setMessage] = useState("No message...");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPageMounted(true);

      const updateMessage = (__text: string) => {
        setMessage(__text);
      };

      modelViewerRef.current?.addEventListener("ar-status", (event: any) => {
        updateMessage(event.detail.status);
      });

      return () =>
        modelViewerRef.current?.removeEventListener("ar-status", () =>
          updateMessage("remove event")
        );
    }
  }, []);

  const handleClickButton = (__name: string) => {
    setModel(`${__name}.glb`);
  };

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
              "ar-modes": "scene-viewer quick-look",
              "camera-controls": true,
              "disable-pan": true,
              "environment-image": "neutral",
              "shadow-intensity": "1",
              id: "model-viewer",
              src: `test/${model}`,
              autoplay: true,
              style: {
                height: "100%",
                width: "100%",
                position: "absolute",
                inset: "0 0 0 0",
              },
            },
            <div className='overlay-content'>
              <div id='text' className='text'>
                {message}
              </div>

              <div className='button-container'>
                <button
                  type='button'
                  className='button'
                  onClick={() => handleClickButton("Horse")}
                >
                  A
                </button>
                <button
                  type='button'
                  className='button'
                  onClick={() => handleClickButton("Chair")}
                >
                  B
                </button>
                <button
                  type='button'
                  className='button'
                  onClick={() => handleClickButton("GeoPlanter")}
                >
                  C
                </button>
              </div>
            </div>
          )}
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          background-color: #555;
          position: absolute;
        }

        .overlay-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .button-container {
          display: flex;
          margin-top: 8px;

          .button {
            width: 100%;
            padding: 8px 16px;
            margin-right: 8px;

            &:last-child {
              margin-right: 0;
            }
          }
        }

        .text {
          text-align: center;
          color: red;
        }
      `}</style>
    </>
  );
};

export default Demo;
