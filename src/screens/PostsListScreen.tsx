/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useCallback, useMemo} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {debounce, throttle} from 'lodash';

import {PostsStackParamsList} from '../navigation/types';
import NavigationKeys from '../navigation/NavigationKeys';
import PostItem from '../components/posts/PostItem';
import indent from '../theme/indent';
import {useGetPostsQuery} from '../services/api/postsApi';

type PostsListScreenNavigationProp = NativeStackNavigationProp<
  PostsStackParamsList,
  NavigationKeys.PostsListScreen
>;

const POSTS_PER_PAGE = 10;
const INITIAL_PAGE = 1;

const PostsListScreen: React.FC = () => {
  const [search, setSearch] = React.useState('');
  const [page, setPage] = React.useState(INITIAL_PAGE);

  const {data} = useGetPostsQuery();
  const filteredPosts = useMemo(
    () =>
      data
        ?.filter(
          post =>
            post.title.toLowerCase().includes(search.toLowerCase()) ||
            post.body.toLowerCase().includes(search.toLowerCase()),
        )
        .slice(0, POSTS_PER_PAGE * page),
    [search, page],
  );

  const navigation = useNavigation<PostsListScreenNavigationProp>();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        onChangeText: event => {
          setSearch(event.nativeEvent.text);
          setPage(INITIAL_PAGE);
        },
      },
    });
  }, []);

  const handlePostPress = useCallback(
    debounce(
      (postId: number) => {
        navigation.push(NavigationKeys.PostScreen, {postId});
      },
      300,
      {leading: true, trailing: false},
    ),
    [],
  );

  const onEndReached = useCallback(
    throttle(({distanceFromEnd}) => {
      if (distanceFromEnd > 0) {
        setPage(prevPage => prevPage + 1);
      }
    }, 50),
    [],
  );

  return (
    <FlatList
      data={filteredPosts}
      keyExtractor={item => String(item.id)}
      renderItem={({item}) => (
        <PostItem postId={item.id} onPress={() => handlePostPress(item.id)} />
      )}
      contentInsetAdjustmentBehavior={'automatic'}
      contentContainerStyle={styles.container}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.3}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: indent.xs,
    gap: indent.m,
  },
});

export default PostsListScreen;
