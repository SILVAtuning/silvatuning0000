import React from 'react';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

function PageTitle(props) {
  const { title } = props;
  return(
    <React.Fragment>
      <Typography sx={{ mt: 5 }} variant="h1" gutterBottom>{title}</Typography>
      <Divider light />
    </React.Fragment>
  );
}

export default PageTitle;