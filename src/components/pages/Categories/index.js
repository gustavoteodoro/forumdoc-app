import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Container, ListContainer, ListItem, ListItemSeparator } from './styles';
import config from "../../../../config.json";
import Heading from "../../molecules/Heading";

export default class Categories extends Component {
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
        <Heading text={'MOSTRAS'} />
        <ListContainer>
          <FlatList
            data={config.mostras}
            renderItem={({item}) => <ListItem key={item.key}>{item.title}</ListItem>}
            ItemSeparatorComponent={() => <ListItemSeparator />}
          />
        </ListContainer>
      </Container>
    );
  }
}
