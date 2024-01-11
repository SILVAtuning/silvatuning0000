import React from 'react';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function PageTitle(props) {
  const { title } = props;
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Typography sx={{ mt: 5 }} variant="h1" gutterBottom>{title}</Typography>
      </ThemeProvider>
      <Divider light sx={{ mb: 5 }} />
    </React.Fragment>
  );
}

export default PageTitle;