import React, { Component } from "react";
import Logo from "../../atoms/Logo";
import { Header } from "./styles";
import { Text } from "react-native";

export default class HeaderComponent extends Component {
  render() {
    return (
      <Header>
        <Logo />
      </Header>
    );
  }
}
