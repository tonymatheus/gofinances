import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { TextInput } from "react-native";

export const InputFrom = styled(TextInput)`
  width: 100%;

  margin: 5px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text_dark};
  padding: 16px 18px;
  margin-bottom: 8px;
`;
