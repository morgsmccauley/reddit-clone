import React from 'react';
import { FlatList, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { ISubredditSearchResult } from '../../types/subredditSearch';

import Image from '../Image';

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
  container: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 20,
    margin: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    borderRadius: 12.5,
  },
});

interface Props {
  results: ISubredditSearchResult[];
  onPress(arg0: string): void;
}

const renderSearchResult = (onPress, {
  iconUrl,
  namePrefixed,
  subscribers,
}: ISubredditSearchResult) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => onPress(namePrefixed)}
  >
    {!!iconUrl && <Image image={{ url: iconUrl, height: 25, width: 25 }} style={styles.icon} />}
    <View>
      <Text>{namePrefixed}</Text>
      <Text>{subscribers}</Text>
    </View>
  </TouchableOpacity>
);

const renderItem = (onPress) => ({ item }) => renderSearchResult(onPress, item);

const SearchResults = ({ results, onPress }: Props) => (
  <FlatList
    style={styles.list}
    data={results}
    renderItem={renderItem(onPress)}
  />
);

export default SearchResults;
