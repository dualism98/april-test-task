import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import NavigationKeys from './NavigationKeys';
import PostsStack from './stacks/PostsStack';
import SettingsScreen from '../screens/SettingsScreen';

const BottomTab = createBottomTabNavigator();

const RootNavigator: React.FC = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name={NavigationKeys.PostsStack}
        options={{tabBarLabel: 'Posts', headerShown: false}}
        component={PostsStack}
      />
      <BottomTab.Screen
        name={NavigationKeys.SettingsScreen}
        options={{tabBarLabel: 'Settings'}}
        component={SettingsScreen}
      />
    </BottomTab.Navigator>
  );
};

export default RootNavigator;
