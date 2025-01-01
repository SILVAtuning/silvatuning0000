import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import XIcon from '@mui/icons-material/X';

export default function FooterContent() {
  const mailAddress = process.env.REACT_APP_MAIL_ADDRESS;
  const xAccountId = process.env.REACT_APP_X_ACCOUNT_ID;
  const backgroundColor = "#424242";
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sm={6}>
        <Card style={{ backgroundColor: backgroundColor }} square>
          <CardContent>
            <Typography textAlign="center" variant="h6" color="text.secondary" gutterBottom>
              Email
            </Typography>
            <CardActions sx={{ justifyContent: "center", p: 0, m: 0 }}>
              <IconButton size="large" component="a" href={`mailto:${mailAddress}`}>
                <MailOutlineIcon fontSize='large' />
              </IconButton>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card style={{ backgroundColor: backgroundColor }} square>
          <CardContent>
            <Typography textAlign="center" variant="h6" color="text.secondary" gutterBottom>
              Contact
            </Typography>
            <CardActions sx={{ justifyContent: "center", p: 0, m: 0 }}>
              <IconButton size="large" component="a" href={`https://twitter.com/messages/compose?recipient_id=${xAccountId}`}>
                <XIcon fontSize='large' />
              </IconButton>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}