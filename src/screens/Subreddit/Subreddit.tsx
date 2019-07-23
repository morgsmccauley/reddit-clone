import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import styles from './Subreddit.style';
import Posts from '../../components/Posts';
import SearchBar from '../../components/SearchBar';
import { IPost } from '../../types/post';

import { fetchPostsForSubreddit } from '../../actions/postsActions';
import { searchForSubreddits } from '../../actions/subredditActions';

interface StateProps {
  posts: IPost[];
  isFetching: boolean;
  subredditSearchResults: string[];
}

interface DispatchProps {
  fetchPosts: (subreddit: string) => void;
  searchSubreddits: (query: string) => void;
}

const renderLoading = () => <Text>Loading...</Text>;

const Subreddit = ({
  fetchPosts,
  posts,
  isFetching,
  searchSubreddits,
  subredditSearchResults,
}: StateProps & DispatchProps) => {
  const firstSearchResult = subredditSearchResults[0];
  useEffect(() => {
    fetchPosts(firstSearchResult || 'r/aww');
  }, [firstSearchResult]);

  const renderPosts = () => <Posts posts={posts} />;

  return (
    <View style={styles.container}>
      <SearchBar onSubmit={searchSubreddits} />
      {isFetching ? renderLoading() : renderPosts()}
    </View>
  );
};

Subreddit.defaultProps = {
  fetchPosts: () => {},
  searchSubreddits: () => {},
};

const mapStateToProps = (state: any) => ({
  posts: state.posts.data,
  subredditSearchResults: state.subreddit.data,
  isFetching: state.posts.isFetching,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchPosts: (subreddit: string) => dispatch(fetchPostsForSubreddit(subreddit)),
  searchSubreddits: (query: string) => dispatch(searchForSubreddits(query)),
});

export { Subreddit as SubredditUnconnected };
export default connect(mapStateToProps, mapDispatchToProps)(Subreddit);
