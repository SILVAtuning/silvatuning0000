import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home
} from "../pages";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

function RouterConfig() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter basename='/silvatuning0000'>
          <Routes>
            <Route index element={<Home />} />
            {/* <Route path="page1" element={<SamplePage1 />} />
        <Route path="page2" element={<SamplePage2 />} /> */}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default RouterConfig;