import React from "react";
import Container from '@mui/material/Container';
import { MuiLinkForNextJs as Link } from "../_component/MuiLinkForNextJs";
import PageTitle from "../_component/PageTitle";
import EmbedTable from "../_component/EmbedTable";

const Works = () => {
  const title = "Works";
  return (
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
  );
}

export default Works;
