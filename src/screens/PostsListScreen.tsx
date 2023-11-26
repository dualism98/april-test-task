/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {PostsStackParamsList} from '../navigation/types';
import NavigationKeys from '../navigation/NavigationKeys';

type PostsListScreenNavigationProp = NativeStackNavigationProp<
  PostsStackParamsList,
  NavigationKeys.PostsListScreen
>;

const PostsListScreen: React.FC = () => {
  const [search, setSearch] = React.useState('');

  const navigation = useNavigation<PostsListScreenNavigationProp>();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        onChangeText: event => setSearch(event.nativeEvent.text),
      },
    });
  }, []);

  React.useEffect(() => {
    const timeout = setTimeout(
      () => navigation.push(NavigationKeys.PostScreen, {postId: 1}),
      2000,
    );

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={[]}
        renderItem={data => null}
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
