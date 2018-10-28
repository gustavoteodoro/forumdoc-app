import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation';
import Home from '../../pages/Home';
import Filmes from '../../pages/Calendar';
import Mostras from '../../pages/Categories';
import Favoritos from '../../pages/MyMovies';

export default createBottomTabNavigator(
  {
    Home,
    Filmes,
    Mostras,
    Favoritos,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
        } else if (routeName === 'Filmes') {
          iconName = `ios-film`;
        } else if (routeName === 'Mostras') {
          iconName = `ios-albums`;
        } else if (routeName === 'Favoritos') {
          iconName = `ios-heart`;
        }

        return <Ionicons name={iconName} size={22} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);
