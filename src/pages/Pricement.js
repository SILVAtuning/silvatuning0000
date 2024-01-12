import React from "react";
import {
  DrawerAppBar,
  PageTitle,
  PriceCard
} from "../components";
import Container from '@mui/material/Container';
import { Helmet } from "react-helmet";

function Pricement() {
  const title = "Pricement";
  return (
    <React.Fragment>
      <Helmet
        title={`${title} | ${process.env.REACT_APP_SITE_NAME}`}
      />
      <DrawerAppBar />
      <Container maxWidth="md" sx={{ mb: 5 }}>
        <PageTitle title={title} />
        <p>依頼をご検討いただきありがとうございます。</p>
        <p>詳細に関しましては、TwitterのDMまたはEmailにて納期と予算を相談させていただきますが、おおよその料金につきましては下記を参考にしてください。</p>

        <PriceCard/>
      </Container>

    </React.Fragment>
  );
}

export default Pricement;