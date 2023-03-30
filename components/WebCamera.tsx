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
    if (containerRef.current) {
      const ref = containerRef.current;
      const w = ref.clientWidth;
      const h = ref.clientHeight;

      setWindowSize({
        width: Number(w),
        height: Number(h),
      });

      setVideoConstraints({
        width: Number(w),
        height: Number(h),
        facingMode: { exact: "environment" },
      });
    }
  }, [containerRef]);

  return (
    <div ref={containerRef} className='web-camera-container'>
      <Webcam
        width={windowSize.width}
        height={windowSize.height}
        videoConstraints={videoConstraints}
      />

      <style jsx>{`
        .web-camera-container {
          width: 100%;
          height: 100%;
          background-color: rgba(blue, 0.5);
        }

        .video-camera {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0 0 0 0;
        }
      `}</style>
    </div>
  );
};
