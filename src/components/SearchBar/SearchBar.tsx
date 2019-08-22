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
  onFocus: () => void;
}

const SearchBar = ({ onSubmit, onFocus }: Props) => {
  const handleBlur = (e: { nativeEvent: { text: string } }) => onSubmit(e.nativeEvent.text);

  return (
    <View style={styles.container}>
      <TextInput
        onFocus={onFocus}
        style={styles.input}
        placeholder="Search"
        onBlur={handleBlur}
      />
    </View>
  );
};

export default SearchBar;
