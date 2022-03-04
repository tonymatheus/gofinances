import styled from "styled-components/native";
import theme from "../../Global/styles/theme";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.title};
`;
