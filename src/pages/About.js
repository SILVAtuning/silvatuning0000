import React from "react";
import {
  DrawerAppBar,
  PageTitle,
  UseableSoftweare
} from "../components";
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Helmet } from "react-helmet";

function About() {
  const title = "About";
  return (
    <React.Fragment>
      <Helmet
        title={`${title} | ${process.env.REACT_APP_SITE_NAME}`}
      />
      <DrawerAppBar />
      <Container maxWidth="md">
        <PageTitle title={title} />
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="SILVA Avater"
            src={`${process.env.PUBLIC_URL}/images/siva_avater.jpg`}
            sx={{ width: 200, height: 200 }}
          />
        </Stack>
        <p>こんにちは、SILVA(シルヴァ)です。</p>
        <p>VOCALOID, UTAU, CeVIOをはじめとした音声合成ソフトの調声をしております。</p>
        <p>また、VOCALOIDをはじめとした音声合成ソフトを使用した楽曲のボーカル調声のご依頼も受け付けております。(依頼状況によってはお引き受けできない可能性もありますので、一度ご連絡をいただけますと幸いです。)</p>
        <p>調声の雰囲気は<Link to="/works" style={{ color: "inherit" }}>Works</Link>からご覧ください！</p>
        <p>過去に使用した音源については下記のリストを参照ください。</p>

        <Typography sx={{ mt: 10 }} variant="h4" gutterBottom>使用可能音源</Typography>
        <Divider light sx={{ mb: 3 }} />
        <UseableSoftweare />
      </Container>
    </React.Fragment>
  );
}

export default About;