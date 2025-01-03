"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import getImageSrcPath from "@/utils/getImageSrcPath";

export default function Home() {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const [videoSrc, setVideoSrc] = useState<string>(
    getImageSrcPath("/video/silva_tuning_opening.mp4")
  );
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const newSrc = isMobile
      ? getImageSrcPath("/video/silva_tuning_opening_sp.mp4")
      : getImageSrcPath("/video/silva_tuning_opening.mp4");

    if (videoSrc !== newSrc) {
      setVideoSrc(newSrc);

      // 動画の再生をリセット
      if (videoRef.current) {
        videoRef.current.load();

        // 動画がロードされた後に再生
        const handleLoadedData = () => {
          videoRef.current?.play();
        };

        videoRef.current.addEventListener("loadeddata", handleLoadedData);

        // クリーンアップ
        return () => {
          videoRef.current?.removeEventListener("loadeddata", handleLoadedData);
        };
      }
    }
  }, [isMobile, videoSrc]);

  return (
    <div className="home-bg">
      <video autoPlay loop muted playsInline ref={videoRef}>
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}
