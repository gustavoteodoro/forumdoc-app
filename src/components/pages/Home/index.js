import React, { Component } from 'react';
import { HomeContainer, HomeTitle } from './styles';
import Header from "../../organism/Header";

export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Header />
      </HomeContainer>
    );
  }
}
