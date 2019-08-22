import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import styles from './Subreddit.style';

import Posts from '../../components/Posts';
import SearchBar from '../../components/SearchBar';
import SearchResults from '../../components/SearchResults';

import { IPost } from '../../types/post';
import { ISubredditSearchResult } from '../../types/subredditSearch';

import { fetchPostsForSubreddit } from '../../actions/postsActions';
import { searchForSubreddits } from '../../actions/subredditActions';

interface StateProps {
  posts: IPost[];
  isFetching: boolean;
  subredditSearchResults: ISubredditSearchResult[];
}

interface DispatchProps {
  fetchPosts: (subreddit: string) => void;
  searchSubreddits: (query: string) => void;
}

const renderLoading = <Text>Loading...</Text>;

const Subreddit = ({
  fetchPosts,
  posts,
  isFetching,
  searchSubreddits,
  subredditSearchResults,
}: StateProps & DispatchProps) => {
  const [currentSubreddit, setCurrentSubreddit] = useState('');
  const [isSearching, setIsSearching] = useState(true);

  useEffect(() => {
    fetchPosts(currentSubreddit);
  }, [currentSubreddit]);

  const handleSearchResultPress = (targetSubreddit: string) => {
    setCurrentSubreddit(targetSubreddit);
    setIsSearching(false);
  };

  const handleSearchBarFocus = () => setIsSearching(true);

  const renderPosts = <Posts posts={posts} />;

  const renderSearchResults =
    <SearchResults results={subredditSearchResults} onPress={handleSearchResultPress} />;

  return (
    <View style={styles.container}>
      <SearchBar onSubmit={searchSubreddits} onFocus={handleSearchBarFocus}/>
      {isSearching && subredditSearchResults && renderSearchResults}
      {!isSearching && isFetching && renderLoading}
      {!isSearching && !isFetching && renderPosts}
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
