import React from "react";
import { Container } from "@mui/material";
import { Headline, Inner, Title } from "../../utils/Styled/style";
import FormField from "../Form/Form";

function Wrapper() {
  return (
    <Container maxWidth="xs">
      <Inner>
        <Title>Пароль</Title>
        <Headline>Придумайте новый пароль</Headline>
        <FormField />
      </Inner>
    </Container>
  );
}

export default Wrapper;
