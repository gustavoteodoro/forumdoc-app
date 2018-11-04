import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container } from './styles';

export default class MyMovies extends Component {
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
      </Container>
    );
  }
}
