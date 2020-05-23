import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import yelp from '../api/yelp'

const ResultShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null)
  const id = navigation.getParam('id')

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }
  useEffect(() => {
    getResult(id)
  }, [])

  if (!result) {
    return null
  }

  return (

    <>
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.info}>{result.display_phone}        {result.is_closed ? <Text style={{ color: 'red' }}> CLOSED </Text> : <Text style={{ color: 'lime' }}>OPEN</Text>}        {result.location.city}</Text>
      <FlatList
        style={styles.flexParent}
        showsHorizontalScrollIndicator={true}
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image
            source={{ url: item }}
            style={styles.photoStyle}
          />
        }} />
    </>

  )
}

const styles = StyleSheet.create({
  photoStyle: {
    height: 200,
    width: " 100%",
  },
  title: {
    backgroundColor: '#222222',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 60,
    textAlign: 'center'
  },
  info: {
    textAlign: 'center',
    backgroundColor: '#222222',
    color: 'white'
  },
  flexParent: {
    flexDirection: "column",
    height: 400,
    width: 400,
  }
})
export default ResultShowScreen