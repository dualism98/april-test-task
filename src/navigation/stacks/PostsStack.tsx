import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import NavigationKeys from '../NavigationKeys';
import PostsListScreen from '../../screens/PostsListScreen';
import PostScreen from '../../screens/PostScreen';

const Stack = createNativeStackNavigator();

const PostsStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NavigationKeys.PostsListScreen}
        options={{headerTitle: 'Posts'}}
        component={PostsListScreen}
      />
      <Stack.Screen
        name={NavigationKeys.PostScreen}
        options={{headerTitle: 'Post'}}
        component={PostScreen}
      />
    </Stack.Navigator>
  );
};

export default PostsStack;
