import React from "react";
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import XIcon from '@mui/icons-material/X';
import Container from '@mui/material/Container';
import Copyright from "./Copylight";

export default function FooterContent() {
  const mailAddress = process.env.NEXT_PUBLIC_REACT_APP_MAIL_ADDRESS;
  const xAccountId = process.env.NEXT_PUBLIC_REACT_APP_X_ACCOUNT_ID;
  const backgroundColor = "#424242";
  return (
    <Container maxWidth={false} disableGutters>
      <Grid container spacing={0}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Card style={{ backgroundColor: backgroundColor }} square>
            <CardContent>
              <Typography textAlign="center" variant="h6" color="text.secondary" gutterBottom>
                Email
              </Typography>
              <CardActions sx={{ justifyContent: "center", p: 0, m: 0 }}>
                <IconButton size="large" component="a" href={`mailto:${mailAddress}`} target="_blank">
                  <MailOutlineIcon fontSize='large' />
                </IconButton>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Card style={{ backgroundColor: backgroundColor }} square>
            <CardContent>
              <Typography textAlign="center" variant="h6" color="text.secondary" gutterBottom>
                Contact
              </Typography>
              <CardActions sx={{ justifyContent: "center", p: 0, m: 0 }}>
                <IconButton size="large" component="a" href={`https://twitter.com/messages/compose?recipient_id=${xAccountId}`} target="_blank">
                  <XIcon fontSize='large' />
                </IconButton>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Copyright />
    </Container>
  );
}
