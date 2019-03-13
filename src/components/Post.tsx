import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';

export interface IPost {
  title: string;
  id: string;
  author: string;
  num_comments: number;
  score: number;
  url: string;
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
    <View style={styles.footerContainer}>
      <Text>{post.score}</Text>
      <Text>{post.num_comments}</Text>
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
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    marginVertical: 20,
  },
});

export default Post;
