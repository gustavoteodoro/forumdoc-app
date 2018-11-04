import React from "react";
import { View, Text } from "react-native";
import { Heading, HeadingText } from "./styles";

export default function HeadingComponent({ text }) {
  return (
    <Heading>
      <HeadingText>{text}</HeadingText>
    </Heading>
  )
}
