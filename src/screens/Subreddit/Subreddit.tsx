import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import styles from './Subreddit.style';
import Posts from '../../components/Posts';
import { IPost } from '../../components/Post';
import { fetchPostsForSubreddit } from '../../actions/postsActions';

interface Props {
  dispatch: Dispatch<any>;
  posts: IPost[];
  isFetching: boolean;
}

class Subreddit extends Component<Props> {
  componentDidMount() {
    this.props.dispatch(fetchPostsForSubreddit('aww'));
  }

  renderPosts() {
    return <Posts posts={this.props.posts} />;
  }

  renderLoading() {
    return <Text>Loading...</Text>;
  }

  public render() {
    return (
      <View style={styles.container}>
        {this.props.isFetching ? this.renderLoading() : this.renderPosts()}
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  posts: state.posts.data,
  isFetching: state.posts.isFetching,
});

export default connect(mapStateToProps)(Subreddit);
