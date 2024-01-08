import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    Home
} from "../pages";


function RouterConfig() {
  return (
    <>
     <BrowserRouter basename='/silvatuning0000'>
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="page1" element={<SamplePage1 />} />
        <Route path="page2" element={<SamplePage2 />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default RouterConfig;