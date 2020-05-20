import React, { useState } from 'react'

import SearchBar from '../components/SearchBar';
import ResultList from '../components/ResultList'

import useResults from '../hooks/useResults'

import { StyleSheet, Text, ScrollView } from 'react-native'

const SearchScreen = () => {
  const [term, setTerm] = useState("")
  const [searchApi, results, error] = useResults()

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price
    })
  }

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmitted={() => searchApi(term)} />
      {error ? <Text style={styles.errorText}>* Error with API call</Text> : null}
      <ScrollView>
        <ResultList
          results={filterResultsByPrice('$')}
          title='Cost Effective'
        />

        <ResultList
          results={filterResultsByPrice('$$')}
          title='Bit Pricey'
        />

        <ResultList
          results={filterResultsByPrice('$$$')}
          title='Big Spender'
        />

        <ResultList
          results={filterResultsByPrice('$$$')}
          title='Elitist'
        />
      </ScrollView>

    </>
  )
}

const styles = StyleSheet.create({
  pageText: {
    fontSize: 50,
  },
  errorText: {
    color: 'red'
  }
})

export default SearchScreen