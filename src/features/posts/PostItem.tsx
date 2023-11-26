import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import useAppSelector from '../../hooks/useAppSelector';

interface Props {
  postId: number;
  onPress: () => void;
}

const PostItem: React.FC<Props> = ({postId, onPress}) => {
  const post = useAppSelector(state =>
    state.posts.posts.find(({id}) => id === postId),
  );

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text numberOfLines={1}>{post?.title}</Text>
      <Text numberOfLines={2}>{post?.body}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: {

    },
});

export default PostItem;
