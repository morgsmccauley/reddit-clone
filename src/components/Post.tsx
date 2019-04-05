import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';

import { IPost, IImage } from '../types/post';

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

const renderImage = ({ height, width, url }: IImage) => (
  <Image
    style={{ height, width }}
    resizeMode="contain"
    source={{ uri: url }}
  />
);

const Post = ({ post }: Props) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text>{`u/${post.author}`}</Text>
      <Text style={styles.title}>{post.title}</Text>
    </View>
    {post.image && renderImage(post.image)}
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
