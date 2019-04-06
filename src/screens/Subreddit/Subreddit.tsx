import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import styles from './Subreddit.style';
import Posts from '../../components/Posts/Posts';
import { IPost } from '../../types/post';
import { fetchPostsForSubreddit } from '../../actions/postsActions';

interface Props {
  posts: IPost[];
  isFetching: boolean;
  fetchPosts?: (subreddit: string) => void;
}

const renderLoading = () => <Text>Loading...</Text>;

const Subreddit = ({
  fetchPosts,
  posts,
  isFetching,
}: Props) => {
  useEffect(() => {
    fetchPosts && fetchPosts('aww');
  }, []);

  const renderPosts = () => <Posts posts={posts} />;

  return (
    <View style={styles.container}>
      {isFetching ? renderLoading() : renderPosts()}
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  posts: state.posts.data,
  isFetching: state.posts.isFetching,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchPosts: (subreddit: string) => dispatch(fetchPostsForSubreddit(subreddit)),
});

export { Subreddit as SubredditUnconnected };
export default connect(mapStateToProps, mapDispatchToProps)(Subreddit);
