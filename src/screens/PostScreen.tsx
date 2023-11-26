/* eslint-disable react-hooks/exhaustive-deps */
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';

import {PostsStackParamsList} from '../navigation/types';
import NavigationKeys from '../navigation/NavigationKeys';
import ApiService from '../services/api/Api.service';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Post} from '../types/posts';
import indent from '../theme/indent';
import {fontSizes} from '../theme/fonts';

type PostScreenRouteProp = RouteProp<
  PostsStackParamsList,
  NavigationKeys.PostScreen
>;

type PostScreenNavigationProp = NativeStackNavigationProp<
  PostsStackParamsList,
  NavigationKeys.PostScreen
>;

const PostScreen: React.FC = () => {
  const [post, setPost] = React.useState<Post | null>(null);

  const navigation = useNavigation<PostScreenNavigationProp>();
  const route = useRoute<PostScreenRouteProp>();
  const {postId} = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `Post #${postId}`,
    });
  }, []);

  React.useEffect(() => {
    loadPostData();
  }, []);

  const loadPostData = useCallback(async () => {
    const fetchedPost = await ApiService.getPostById(postId);
    setPost(fetchedPost);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{post?.title}</Text>
      <Text>{post?.body}</Text>
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
