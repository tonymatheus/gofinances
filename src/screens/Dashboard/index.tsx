import React from "react";
import { HighlightCard } from "../../components/HightlightCard";

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
} from "./styles";

export function Dashboard() {
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
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightCards>
    </Container>
  );
}
