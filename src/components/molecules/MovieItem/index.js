import React, { Component } from 'react';
import {
  MovieItemContainer,
  MovieItemContent,
  MovieItemImageContainer,
  MovieItemImage,
  MovieItemTextContainer,
  MovieItemTitle,
  MovieItemDescription,
  MovieItemCountry,
  MovieItemBottomBar,
  MovieItemLocation,
  MovieItemBottomText,
  MovieItemTime,
  MovieItemLike
} from './styles';
import { View, Text, Image } from "react-native";

export default class MovieItem extends Component {
  render() {
    return (
      <MovieItemContainer>
        <MovieItemContent>
          <MovieItemImageContainer>
            <MovieItemImage
              source={{uri: this.props.image}}
              resizeMode={'cover'}
            />
          </MovieItemImageContainer>
          <MovieItemTextContainer>
            <MovieItemTitle>{this.props.title}</MovieItemTitle>
            <MovieItemDescription>{this.props.description}</MovieItemDescription>
            <MovieItemCountry>{this.props.country}</MovieItemCountry>
          </MovieItemTextContainer>
        </MovieItemContent>
        <MovieItemBottomBar>
          <MovieItemLocation>
            <MovieItemBottomText>{this.props.location}</MovieItemBottomText>
          </MovieItemLocation>
          <MovieItemTime>
            <MovieItemBottomText>{this.props.time}</MovieItemBottomText>
          </MovieItemTime>
          <MovieItemLike>
            <MovieItemBottomText>Quero assistir</MovieItemBottomText>
          </MovieItemLike>
        </MovieItemBottomBar>
      </MovieItemContainer>
    );
  }
}
