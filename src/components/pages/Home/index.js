import React, { Component } from 'react';
import { Container } from './styles';
import { ScrollView } from "react-native";
import Header from "../../organism/Header";
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
        <Header />
        <ScrollView style={{flex: 1, marginBottom: 15}}>
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
      </Container>
    );
  }
}
