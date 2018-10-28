import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { Container, Heading, HeadingText, ListContainer, ListItem, ListItemSeparator } from './styles';
import Header from "../../organism/Header";

export default class Categories extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Heading>
          <HeadingText>MOSTRAS</HeadingText>
        </Heading>
        <ListContainer>
          <FlatList
            data={[
              {key: 'Devin'},
              {key: 'Jackson'},
              {key: 'James'},
              {key: 'Joel'},
              {key: 'John'},
              {key: 'Jillian'},
              {key: 'Jimmy'},
              {key: 'Julie'},
            ]}
            renderItem={({item}) => <ListItem>{item.key}</ListItem>}
            ItemSeparatorComponent={() => <ListItemSeparator />}
          />
        </ListContainer>
      </Container>
    );
  }
}
