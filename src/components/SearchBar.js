import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmitted }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.searchIcon} color="black" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmitted}
      >
      </TextInput>
    </View >
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flexDirection: 'row',
    color: '#999999',
    fontSize: 20,
    backgroundColor: '#F0EEEE',
    borderRadius: 5,
    marginHorizontal: 20,
    height: 50,
    marginTop: 10,
    marginBottom: 10
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  searchIcon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 10

  }
})

export default SearchBar