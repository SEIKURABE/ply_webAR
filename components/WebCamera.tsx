import React, { useEffect, useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";

export const WebCamera = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const [videoConstraints, setVideoConstraints] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;

        setWindowSize({
          width: w,
          height: h,
        });

        setVideoConstraints({
          width: w,
          height: h,
          facingMode: { exact: "environment" },
          // facingMode: "user",
        });
      };

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div ref={containerRef} className='web-camera-container'>
      {videoConstraints && (
        <Webcam
          className='video-camera'
          width={windowSize.width}
          height={windowSize.height}
          minScreenshotWidth={windowSize.width}
          minScreenshotHeight={windowSize.height}
          videoConstraints={videoConstraints}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      )}

      <style jsx>{`
        .web-camera-container {
          width: 100%;
          height: 100%;
          background-color: rgba(blue, 0.5);
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};
