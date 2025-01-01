'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-noto-sans)',
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

export default theme;
