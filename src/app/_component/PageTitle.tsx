import React from 'react';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

type Props = {
  title: string;
}

function PageTitle(props: Props) {
  const { title } = props;
  return (
    <React.Fragment>
      <Typography sx={{ mt: 5 }} variant="h1" gutterBottom>{title}</Typography>
      <Divider sx={{ mb: 5 }} />
    </React.Fragment>
  );
}

export default PageTitle;
