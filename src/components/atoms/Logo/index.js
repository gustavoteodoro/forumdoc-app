import React, { Component } from "react";
import { Image } from "react-native";

export default class LogoComponent extends Component {
  render() {
    return (
      <Image
        style={{width: 500, height: 80, marginTop: 80}}
        resizeMode={'contain'}
        source={require('../../../assets/logo.png')}
      />
    );
  }
}
