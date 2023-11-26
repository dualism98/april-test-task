import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import {PostsStackParamsList} from '../navigation/types';
import NavigationKeys from '../navigation/NavigationKeys';

type PostScreenRouteProp = RouteProp<
  PostsStackParamsList,
  NavigationKeys.PostScreen
>;

const PostScreen: React.FC = () => {
  const route = useRoute<PostScreenRouteProp>();

  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PostScreen;
