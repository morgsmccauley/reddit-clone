import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Posts from './components/Posts';
import { IPost } from './components/Post';

interface Props {}

interface State {
  posts: IPost[];
}

export default class App extends Component<Props, State> {
  state = {
    posts: [],
  };

  componentDidMount() {
    fetch('https://reddit.com/r/aww.json')
      .then((response: any) => response.json())
      .then(subreddit => subreddit.data.children.map(({ data }: any) => data))
      .then(posts => this.setState({ posts }));
  }

  public render() {
    return (
      <View style={styles.container}>
        <Posts posts={this.state.posts} />
      </View>
    );
  }
}

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
