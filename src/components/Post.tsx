import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import Image from './Image';
import { IPost } from '../types/post';

interface Props {
  post: IPost;
}

const Post = ({ post }: Props) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text>{`u/${post.author}`}</Text>
      <Text style={styles.title}>{post.title}</Text>
    </View>
    {post.image && <Image image={post.image}/>}
    <View style={styles.footerContainer}>
      <Text>{post.score}</Text>
      <Text>{post.totalComments}</Text>
      <Text>Share</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    marginVertical: 5,
    backgroundColor: '#ffffff',
  },
  header: {
    paddingHorizontal: 10,
  },
  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    fontWeight: '500',
    fontSize: 20,
  },
});

export default Post;
