import React from "react";
import { TextInputProps } from "react-native";
import { InputFrom } from "./styles";

type Props = TextInputProps;

export function Input({ ...rest }: Props) {
  return <InputFrom {...rest} />;
}
