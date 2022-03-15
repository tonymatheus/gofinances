import React, { useState } from "react";
import { Modal } from "react-native";
import { useForm } from "react-hook-form";

import { Button } from "../../components/Form/Button";
import { CategorySelectButton } from "../../components/Form/CategorySelectButton";
import { Input } from "../../components/Form/Input";
import { InputFrom } from "../../components/Form/Input/styles";
import { InputForm } from "../../components/Form/InputForm";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { CategorySelect } from "../CategorySelect";

import {
  Header,
  Title,
  TransactionTypes,
  Container,
  Form,
  Fields,
} from "./styles";

interface FormData {
  name: string;
  amount: string;
}

export function Register() {
  const [transactionType, setTransactionType] = useState("");
  const [catagoryModalOpen, setCategoryModalOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState({
    key: "category",
    name: "categoria",
  });

  const { control, handleSubmit } = useForm();

  function handleTransactionTypeSelected(type: "up" | "down") {
    setTransactionType(type);
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
  }

  function handleRegister(form: FormData) {
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    };
    console.log(data);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <InputForm control={control} name="name" placeholder="Nome" />
          <InputForm control={control} name="amount" placeholder="Nome" />
          <TransactionTypes>
            <TransactionTypeButton
              title={"ganhos"}
              type={"up"}
              onPress={() => handleTransactionTypeSelected("up")}
              isActive={transactionType === "up"}
            />
            <TransactionTypeButton
              title={"gastos"}
              type={"down"}
              onPress={() => handleTransactionTypeSelected("down")}
              isActive={transactionType === "down"}
            />
          </TransactionTypes>
          <CategorySelectButton
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          />
        </Fields>

        <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
      </Form>
      <Modal visible={catagoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </Container>
  );
}
