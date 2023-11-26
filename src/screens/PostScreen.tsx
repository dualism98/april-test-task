/* eslint-disable react-hooks/exhaustive-deps */
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ScrollView, StyleSheet, Text} from 'react-native';

import {PostsStackParamsList} from '../navigation/types';
import NavigationKeys from '../navigation/NavigationKeys';
import indent from '../theme/indent';
import {fontSizes} from '../theme/fonts';
import {useGetPostByIdQuery} from '../services/api/postsApi';

type PostScreenRouteProp = RouteProp<
  PostsStackParamsList,
  NavigationKeys.PostScreen
>;

type PostScreenNavigationProp = NativeStackNavigationProp<
  PostsStackParamsList,
  NavigationKeys.PostScreen
>;

const PostScreen: React.FC = () => {
  const route = useRoute<PostScreenRouteProp>();
  const {postId} = route.params;
  const {data} = useGetPostByIdQuery(postId);

  const navigation = useNavigation<PostScreenNavigationProp>();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `Post #${postId}`,
    });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{data?.title}</Text>
      <Text>{data?.body}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: indent.m,
    gap: indent.m,
  },

  title: {
    fontSize: fontSizes.s,
    fontWeight: '600',
  },
});

export default PostScreen;
