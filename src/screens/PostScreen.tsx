/* eslint-disable react-hooks/exhaustive-deps */
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';

import {PostsStackParamsList} from '../navigation/types';
import NavigationKeys from '../navigation/NavigationKeys';
import ApiService from '../services/api/Api.service';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type PostScreenRouteProp = RouteProp<
  PostsStackParamsList,
  NavigationKeys.PostScreen
>;

type PostScreenNavigationProp = NativeStackNavigationProp<
  PostsStackParamsList,
  NavigationKeys.PostScreen
>;

const PostScreen: React.FC = () => {
  const [post, setPost] = React.useState(null);

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
      <Text>{post?.title}</Text>
      <Text>{post?.body}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

export default PostScreen;
