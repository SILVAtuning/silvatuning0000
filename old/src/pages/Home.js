import React from "react";
import { DrawerAppBar, Footer } from "../components";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <React.Fragment>
      <Helmet
        title={`Home | ${process.env.REACT_APP_SITE_NAME}`}
      />
      <DrawerAppBar />
      <div className="home-bg">
        <video
          autoPlay
          loop
          muted
        >
          <source
            src={`${process.env.PUBLIC_URL}/video/silva_tuning_opening.mp4`}
            type="video/mp4"
          />
        </video>
      </div>
    </React.Fragment>
  );
}

export default Home;