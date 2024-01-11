import React from "react";
import {
  DrawerAppBar,
  PageTitle,
  EmbedTable
} from "../components";
import Container from '@mui/material/Container';


function Home() {
  return (
    <React.Fragment>
      <DrawerAppBar />
      <Container maxWidth="md">
        <PageTitle title="Works"/>
        <p>調声させていただいた作品です。</p>
        <p>調声の雰囲気の参考にしていただけますと幸いです。</p>

        <EmbedTable/>
      </Container>
    </React.Fragment>
  );
}

export default Home;