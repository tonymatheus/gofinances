import React from "react";
import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from "./styles";

export function HighlightCard() {
  return (
    <Container>
      <Header>
        <Title>Entradas</Title>
        <Icon name="arrow-up-circle" />
      </Header>
      <Footer>
        <Amount>R$1000</Amount>
        <LastTransaction>Ultima entrada desse mes</LastTransaction>
      </Footer>
    </Container>
  );
}
