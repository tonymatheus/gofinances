import React, { useState } from "react";
import { Button } from "../../components/Form/Button";
import { CategorySelec } from "../../components/Form/CategorySelect";
import { Input } from "../../components/Form/Input";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";

import {
  Header,
  Title,
  TransactionTypes,
  Container,
  Form,
  Fields,
} from "./styles";

export function Register() {
  const [transactionType, setTransactionType] = useState("");

  function handleTransactionTypeSelected(type: "up" | "down") {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="nome" />
          <Input placeholder="preço" />
          <TransactionTypes>
            <TransactionTypeButton
              title={"teste"}
              type={"up"}
              onPress={() => handleTransactionTypeSelected("up")}
              isActive={transactionType === "up"}
            />
            <TransactionTypeButton
              title={"teste"}
              type={"down"}
              onPress={() => handleTransactionTypeSelected("down")}
              isActive={transactionType === "down"}
            />
          </TransactionTypes>
          <CategorySelec title="Categoria" />
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
