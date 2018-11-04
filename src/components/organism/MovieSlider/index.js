import React, { Component } from "react";
import { Dimensions, ActivityIndicator } from 'react-native';
import SideSwipe from 'react-native-sideswipe';
import MovieSliderItem from '../../molecules/MovieSliderItem';
import API from "../../../services/api";

export default class MovieSlider extends Component {
  state = {
    currentIndex: 0,
    data: []
  };

  componentDidMount() {
    API.getMovies().then((data) => {
      this.setState({
        data: data
      });
    });
  }

  render = () => {
    // center items on screen
    const { width } = Dimensions.get('window');
    const contentOffset = 20;

    return (
      <React.Fragment>
        {this.state.data.length ? <SideSwipe
          index={this.state.currentIndex}
          itemWidth={MovieSliderItem.WIDTH + 20}
          style={{ width }}
          data={this.state.data}
          contentOffset={contentOffset}
          onIndexChange={index =>
            this.setState(() => ({ currentIndex: index }))
          }
          renderItem={({ itemIndex, currentIndex, item, animatedValue }) => (
           <MovieSliderItem
              image={item.media1.media_details.sizes.medium.source_url}
              title={item.title + ' (' + item.year + ')'}
              index={itemIndex}
              currentIndex={currentIndex}
              animatedValue={animatedValue}
            />
          )}
        /> : <ActivityIndicator
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
      </React.Fragment>
    );
  };
}
