import React, { Component } from 'react';
import { Text } from 'react-native';
import { HomeContainer } from './styles';
import Header from "../../organism/Header";

export default class Calendar extends Component {
  render() {
    return (
      <HomeContainer>
        <Header />
      </HomeContainer>
    );
  }
}
