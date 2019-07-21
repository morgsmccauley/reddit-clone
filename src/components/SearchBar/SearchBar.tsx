import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  input: {
    padding: 10,
  },
});

interface Props {
  onSubmit: (searchString: string) => void;
}

const SearchBar = ({ onSubmit }: Props) => {
  const onBlur = (e: { nativeEvent: { text: string } }) => onSubmit(e.nativeEvent.text);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        onBlur={onBlur}
      />
    </View>
  );
};

export default SearchBar;
