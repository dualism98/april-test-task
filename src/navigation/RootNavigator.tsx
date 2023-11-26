/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import NavigationKeys from './NavigationKeys';
import PostsStack from './stacks/PostsStack';
import SettingsScreen from '../screens/SettingsScreen';
import {RootParamsList} from './types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomTab = createBottomTabNavigator<RootParamsList>();

const RootNavigator: React.FC = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name={NavigationKeys.PostsStack}
        options={{
          tabBarLabel: 'Posts',
          tabBarIcon: ({color, size}) => (
            <Icon name={'format-list-bulleted'} color={color} size={size} />
          ),
          headerShown: false,
        }}
        component={PostsStack}
      />
      <BottomTab.Screen
        name={NavigationKeys.SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <Icon name={'cog'} color={color} size={size} />
          ),
        }}
        component={SettingsScreen}
      />
    </BottomTab.Navigator>
  );
};

export default RootNavigator;
