'use client';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

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

export default responsiveFontSizes(theme);
