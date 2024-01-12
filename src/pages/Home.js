import React from "react";
import { DrawerAppBar, Footer } from "../components";

function Home() {
  return (
    <React.Fragment>
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
      {/* <h1>SILVA tuning</h1>
      <p>こんにちは。</p> */}
    </React.Fragment>
  );
}

export default Home;