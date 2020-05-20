import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import ResultDetail from '../components/ResultsDetail'

const ResultList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result =>
          result.id
        }
        renderItem={({ item }) => {
          return <ResultDetail result={item}
          />
        }}
      />
    </View>)

}

const styles = StyleSheet.create({
  titleStyle: {
    marginLeft: 15,
    fontSize: 24,
    fontWeight: 'bold'
  },
  container: {
    marginBottom: 10
  }
})

export default ResultList