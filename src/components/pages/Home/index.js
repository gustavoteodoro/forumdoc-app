import React, { Component } from 'react';
import { Container } from './styles';
import { ScrollView } from "react-native";
import Header from "../../organism/Header";
import MovieItem from "../../molecules/MovieItem";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header />
        <ScrollView style={{flex: 1, marginBottom: 15}}>
          <MovieItem
            image={'http://www.forumdoc.org.br/wp-content/uploads/2017/11/36_YAOKWA_Bb-150x150.jpg'}
            title={'TITLE (2015)'}
            description={'Lorem ispum dolor sit amet etc etc blabla hey hey hahah huhu hihi kkk hahaha'}
            country={'País: Brasil'}
            location={'Cine Humberto Mauro'}
            time={'17:00h'}
          />
          <MovieItem
            image={'http://www.forumdoc.org.br/wp-content/uploads/2017/11/36_YAOKWA_Bb-150x150.jpg'}
            title={'TITLE (2015)'}
            description={'Lorem ispum dolor sit amet etc etc blabla hey hey hahah huhu hihi kkk hahaha'}
            country={'País: Brasil'}
            location={'Cine Humberto Mauro'}
            time={'17:00h'}
          />
          <MovieItem
            image={'http://www.forumdoc.org.br/wp-content/uploads/2017/11/36_YAOKWA_Bb-150x150.jpg'}
            title={'TITLE (2015)'}
            description={'Lorem ispum dolor sit amet etc etc blabla hey hey hahah huhu hihi kkk hahaha'}
            country={'País: Brasil'}
            location={'Cine Humberto Mauro'}
            time={'17:00h'}
          />
        </ScrollView>
      </Container>
    );
  }
}
