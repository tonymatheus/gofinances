import React from "react";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { HighlightCard } from "../../components/HightlightCard";
import { TransactionCard } from "../../components/TransactionCard";
import { TransactionCardProps } from "../../components/TransactionCard";

import {
  Container,
  Header,
  UserInfo,
  User,
  Photo,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: "1",
      type: "positive",
      title: "Desenvolvimento de site",
      amount: "R$2.800",
      category: {
        name: "vendas",
        icon: "dollar-sign",
      },
      date: "18/02/2022",
    },
    {
      id: "2",
      type: "negative",
      title: "Aluguel do apartamento",
      amount: "R$2.800",
      category: {
        name: "vendas",
        icon: "shopping-bag",
      },
      date: "18/02/2022",
    },
    {
      id: "3",
      type: "positive",
      title: "Desenvolvimento desite",
      amount: "R$2.800",
      category: {
        name: "vendas",
        icon: "coffee",
      },
      date: "18/02/2022",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/43850888?v=4",
              }}
            />
            <User>
              <UserGreeting>Hello</UserGreeting>
              <UserName>Tony</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="1200"
          lastTransaction="Ultima compra feita nesse dia"
        />
        <HighlightCard
          type="down"
          title="Saída"
          amount="3000"
          lastTransaction="Ultima  saída dia"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="5000"
          lastTransaction="Seu Totle"
        />
      </HighlightCards>
      <Transactions>
        <Title>Listagem</Title>
        <TransactionsList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
