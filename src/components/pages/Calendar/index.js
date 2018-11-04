import React, { Component } from 'react';
import { Container } from './styles';
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import MovieItem from "../../molecules/MovieItem";
import API from "../../../services/api";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    API.getMovies().then((data) => {
      this.setState({
        movies: data
      });
    });
  }

  render() {
    return (
      <Container>
        {/* Temporary */}
        <View style={{
          height: 70,
          backgroundColor: '#9EBDA9',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 20
        }}>
          <Text style={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>Forumdoc.bh.2018 </Text>
        </View>
        <ScrollView
          style={{
            flex: 1,
            paddingBottom: 15
          }}
        >
          {this.state.movies.map((movie, i) => {
            return (
              <MovieItem
                image={movie.media1.media_details.sizes.thumbnail.source_url}
                title={movie.title + ' (' + movie.year + ')'}
                description={movie.content}
                country={movie.country}
                location={movie.showtime ? movie.showtime[0].name : '?'}
                time={movie.showtime ? movie.showtime[0].time : '?'}
                key={i}
              />
            )
          })}
        </ScrollView>
        {!this.state.movies.length && <ActivityIndicator
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        />}
      </Container>
    );
  }
}
