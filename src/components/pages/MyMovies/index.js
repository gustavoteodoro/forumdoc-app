import React, { Component } from 'react';
import { Text } from 'react-native';
import { MyMoviesContainer } from './styles';
import Header from "../../organism/Header";

export default class MyMovies extends Component {
  render() {
    return (
      <MyMoviesContainer>
        <Header />
      </MyMoviesContainer>
    );
  }
}
