import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import Image from '../Image';

import styles from './Post.style';
import { IPost } from '../../types/post';

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

export default Post;
