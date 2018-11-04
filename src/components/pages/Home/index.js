import React, { Component } from 'react';
import { Container } from './styles';
import { View } from "react-native";
import Header from "../../organism/Header";
import MovieSlider from "../../organism/MovieSlider";
import Heading from "../../molecules/Heading";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Heading text={'MEUS PRÓXIMOS FILMES'} />
        <View style={{paddingTop: 20, paddingBottom: 20, height: 240, position: 'relative'}}>
          <MovieSlider />
        </View>
        <Heading text={'MEUS PRÓXIMOS FILMES'} />
        <View style={{paddingTop: 20, paddingBottom: 20, height: 240, position: 'relative'}}>
          <MovieSlider />
        </View>
      </Container>
    );
  }
}
