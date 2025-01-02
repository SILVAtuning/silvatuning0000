import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive';
import getImageSrcPath from "@/utils/getImageSrcPath";

const HomeVideoComponent = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useMediaQuery({ query: '(max-width: 700px)' }, undefined, (bool) => {
    console.log({ bool });
    setIsMobile(bool);
  });

  if (isMobile) {
    return (
      <video
        autoPlay
        loop
        muted
      >
        <source
          src={getImageSrcPath('/video/silva_tuning_opening_sp.mp4')}
          type="video/mp4"
        />
      </video>
    );
  } else {
    return (
      <video
        autoPlay
        loop
        muted
      >
        <source
          src={getImageSrcPath('/video/silva_tuning_opening.mp4')}
          type="video/mp4"
        />
      </video>
    );
  }
}

export default HomeVideoComponent;
