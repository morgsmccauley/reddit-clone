import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';

import { IPost } from '../services/postsService';

export interface ImageDetails {
  url: string;
  width: number;
  height: number;
}

export interface ImageSource {
  source: ImageDetails;
}

interface Props {
  post: IPost;
}

const Post = ({ post }: Props) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text>{`u/${post.author}`}</Text>
      <Text style={styles.title}>{post.title}</Text>
    </View>
    <Image
      style={{ height: post.image.height, width: post.image.width }}
      resizeMode="contain"
      source={{ uri: post.image.url }}
    />
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
