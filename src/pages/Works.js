import React from "react";
import {
  DrawerAppBar,
  PageTitle,
  EmbedTable
} from "../components";
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Helmet } from "react-helmet";


function Home() {
  const title = "Works";
  return (
    <React.Fragment>
      <Helmet
        title={`${title} | ${process.env.REACT_APP_SITE_NAME}`}
      />
      <DrawerAppBar />
      <Container maxWidth="md" sx={{ mb: 10 }}>
        <PageTitle title={title} />
        <p>調声させていただいた作品です。</p>
        <p>調声の雰囲気の参考にしていただけますと幸いです。</p>

        <EmbedTable />

        <p>これ以外にもX(Twitter)のメディア欄でも公開しているものもあります。</p>
        <p>
          <Link href="https://twitter.com/SILVAVACHAN/media" color="inherit" target="_blank">
            こちら
          </Link>からご覧いただけます。
        </p>
      </Container>
    </React.Fragment>
  );
}

export default Home;