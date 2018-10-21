import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation';
import Home from '../../pages/Home';
import Calendar from '../../pages/Calendar';
import MyMovies from '../../pages/MyMovies';

export default createBottomTabNavigator(
  {
    Home,
    Calendar,
    MyMovies,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
        } else if (routeName === 'Calendar') {
          iconName = `ios-calendar`;
        } else if (routeName === 'MyMovies') {
          iconName = `ios-heart`;
        }

        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);