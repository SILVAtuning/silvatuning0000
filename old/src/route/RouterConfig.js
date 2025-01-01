import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Works,
  About,
  Pricement
} from "../pages";
import { FooterContent } from '../components';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

function Copyright() {
  return (
    <Typography sx={{ pt: 3 }} textAlign="center" variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        SILVA tuning
      </Link>{' '}
      {'2021'}
      {'.'}
    </Typography>
  );
}

function RouterConfig() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter basename='/silvatuning0000'>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            <CssBaseline />
            <Routes>
              <Route index element={<Home />} />
              <Route path="works" element={<Works />} />
              <Route path="about" element={<About />} />
              <Route path="pricement" element={<Pricement />} />
            </Routes>
            <Box
              component="footer"
              sx={{
                pb: 3,
                mx: 0,
                mt: 'auto',
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? theme.palette.grey[200]
                    : theme.palette.grey[800],
              }}
            >
              <Container maxWidth="xxl" disableGutters>
                <FooterContent/>
                <Copyright />
              </Container>
            </Box>
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default RouterConfig;