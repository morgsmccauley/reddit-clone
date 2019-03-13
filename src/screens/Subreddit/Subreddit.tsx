import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Posts from '../../components/Posts';
import { IPost } from '../../components/Post';
import { fetchPostsForSubreddit } from '../../actions/posts';

const styles = StyleSheet.create({
  instructions: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'rgb(237, 238, 240)',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 50,
  },
});

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
