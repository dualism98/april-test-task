import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {colors} from '../../theme/colors';
import indent from '../../theme/indent';
import {borderRadius} from '../../theme/constants';
import {fontSizes} from '../../theme/fonts';
import {useGetPostByIdQuery} from '../../services/api/postsApi';

interface Props {
  postId: number;
  onPress: () => void;
}

const PostItem: React.FC<Props> = ({postId, onPress}) => {
  const {data} = useGetPostByIdQuery(postId);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title} numberOfLines={1}>
        {data?.title}
      </Text>
      <Text numberOfLines={2}>{data?.body}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.tints.white[90],
    paddingHorizontal: indent.m,
    paddingVertical: indent.s,
    marginHorizontal: indent.m,
    borderRadius: borderRadius.m,
  },

  title: {
    fontSize: fontSizes.xs,
    fontWeight: '600',
  },
});

export default PostItem;
