import React from "react";
import {
  DrawerAppBar,
  PageTitle,
  PriceCard
} from "../components";
import Container from '@mui/material/Container';

function Pricement() {
  return (
    <React.Fragment>
      <DrawerAppBar />
      <Container maxWidth="md" sx={{ mb: 5 }}>
        <PageTitle title="Pricement" />
        <p>依頼をご検討いただきありがとうございます。</p>
        <p>詳細に関しましては、TwitterのDMまたはEmailにて納期と予算を相談させていただきますが、おおよその料金につきましては下記を参考にしてください。</p>

        <PriceCard/>
      </Container>

    </React.Fragment>
  );
}

export default Pricement;