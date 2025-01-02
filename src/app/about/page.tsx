import React from "react";
import PageTitle from "../_component/PageTitle";
import Container from '@mui/material/Container';
import { MuiLinkForNextJs as Link } from "../_component/MuiLinkForNextJs";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import UseableSoftweare from "../_component/UseableSoftweare";
import getImageSrcPath from "@/utils/getImageSrcPath";

const About = () => {
  const title = "About";
  return (
    <Container maxWidth="md">
      <PageTitle title={title} />
      <Stack direction="row" spacing={2}>
        <Avatar
          alt="SILVA Avater"
          src={getImageSrcPath(`/images/siva_avater.jpg`)}
          sx={{ width: 200, height: 200 }}
        />
      </Stack>
      <p>こんにちは、SILVA(シルヴァ)です。</p>
      <p>VOCALOID, UTAU, CeVIOをはじめとした音声合成ソフトの調声をしております。</p>
      <p>また、VOCALOIDをはじめとした音声合成ソフトを使用した楽曲のボーカル調声のご依頼も受け付けております。(依頼状況によってはお引き受けできない可能性もありますので、一度ご連絡をいただけますと幸いです。)</p>
      <p>調声の雰囲気は<Link href="/works" style={{ color: "inherit" }}>Works</Link>からご覧ください！</p>
      <p>過去に使用した音源については下記のリストを参照ください。</p>

      <Typography sx={{ mt: 10 }} variant="h4" gutterBottom>使用可能音源</Typography>
      <Divider sx={{ mb: 3 }} />
      <UseableSoftweare />
    </Container>
  );
}

export default About;
