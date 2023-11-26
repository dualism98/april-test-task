/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {PostsStackParamsList} from '../navigation/types';
import NavigationKeys from '../navigation/NavigationKeys';
import {fetchPostsData} from '../features/posts/postsThunks';
import useAppSelector from '../hooks/useAppSelector';
import useAppDispatch from '../hooks/useAppDispatch';
import PostItem from '../features/posts/PostItem';

type PostsListScreenNavigationProp = NativeStackNavigationProp<
  PostsStackParamsList,
  NavigationKeys.PostsListScreen
>;

const PostsListScreen: React.FC = () => {
  const [search, setSearch] = React.useState('');
  const {posts, loading} = useAppSelector(state => state.posts);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<PostsListScreenNavigationProp>();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        onChangeText: event => setSearch(event.nativeEvent.text),
      },
    });
  }, []);

  React.useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = useCallback(() => {
    dispatch(fetchPostsData());
  }, []);

  const handlePostPress = useCallback(() => {

  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={item => String(item.id)}
        renderItem={data => (
          <PostItem postId={data.item.id} onPress={handlePostPress} />
        )}
        contentInsetAdjustmentBehavior={'automatic'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PostsListScreen;
