import React, { Component } from 'react';
import { Text } from 'react-native';
import { MyMoviesContainer } from './styles';

export default class MyMovies extends Component {
  render() {
    return (
      <MyMoviesContainer>
        <Text>MyMovies scrin</Text>
      </MyMoviesContainer>
    );
  }
}

