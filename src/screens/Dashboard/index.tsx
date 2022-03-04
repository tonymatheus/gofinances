import React from "react";

import {
  Container,
  Header,
  UserInfo,
  User,
  Photo,
  UserGreeting,
  UserName,
  UserWrapper,
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
        </UserWrapper>
      </Header>
    </Container>
  );
}
