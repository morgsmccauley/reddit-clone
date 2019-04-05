import React from 'react';
import { FlatList } from 'react-native';

import Post from './Post';
import { IPost } from '../services/postsService';

interface Props {
  posts: IPost[];
}

const renderPost = ({ item: post }: { item: IPost }) => <Post post={post} />;

const extractKey = ({ id }: IPost) => id;

const Posts = (props: Props) => (
  <FlatList
    data={props.posts}
    renderItem={renderPost}
    keyExtractor={extractKey}
  />
);

export default Posts;
