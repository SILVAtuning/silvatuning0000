import React from "react";
import Container from '@mui/material/Container';
import PageTitle from "../_component/PageTitle";
import PriceCard from "../_component/PriceCard";

const title = "Pricement";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: `${title} | ${process.env.NEXT_PUBLIC_REACT_APP_SITE_NAME}`
}

const Pricement = () => {
  return (
    <Container maxWidth="md" sx={{ mb: 5 }}>
      <PageTitle title={title} />
      <p>依頼をご検討いただきありがとうございます。</p>
      <p>詳細に関しましては、TwitterのDMまたはEmailにて納期と予算を相談させていただきますが、おおよその料金につきましては下記を参考にしてください。</p>
      <PriceCard />
    </Container>
  );
}

export default Pricement;
