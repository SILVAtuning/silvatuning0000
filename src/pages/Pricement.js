import React from "react";
import {
  DrawerAppBar,
  PageTitle,
  UseableSoftweare
} from "../components";
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

function Pricement() {
  return (
    <React.Fragment>
      <DrawerAppBar />
      <Container maxWidth="md">
        <PageTitle title="Pricement" />
      </Container>
    </React.Fragment>
  );
}

export default Pricement;