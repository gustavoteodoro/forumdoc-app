import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions } from "react-native";
import { LinearGradient } from 'expo';

let { width } = Dimensions.get('window');
width = width - 90;

export default class MovieSliderItem extends Component {
  static WIDTH = width;

  render() {
    return (
      <View style={{
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderLeftWidth: 3,
        borderColor: '#C4C4C4',
        height: 200,
        width: width,
        marginRight: 20
      }}>
        <ImageBackground
          resizeMode={'cover'}
          style={{
            height: '100%'
          }}
          source={{ uri: this.props.image }}
        >
          <LinearGradient colors={['transparent', '#000']} style={{flex: 1, justifyContent: 'flex-end'}}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18, padding: 15}}>{this.props.title}</Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }
}
