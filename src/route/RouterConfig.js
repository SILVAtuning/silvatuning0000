import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Works,
  About
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
            <Route path="works" element={<Works />} />
            <Route path="about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default RouterConfig;