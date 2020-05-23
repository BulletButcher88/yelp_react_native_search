import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import ResultDetail from '../components/ResultsDetail'

const ResultList = ({ title, results, navigation }) => {

  if (!results.length) {
    return null
  }
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
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Result', { id: item.id })
              }>
              <ResultDetail result={item} />
            </TouchableOpacity>
          )
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
    marginBottom: 9,
    borderBottomWidth: 2,
    borderBottomColor: "#DCDDC9"
  }
})

export default withNavigation(ResultList)