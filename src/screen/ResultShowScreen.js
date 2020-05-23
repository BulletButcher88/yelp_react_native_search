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

    <View>
      <Text style={styles.title}>{result.name}</Text>
      <Image style={styles.titleImage} source={{ url: result.image_url }} />
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image
            source={{ url: item }}
            style={styles.photoStyle}
          />
        }} />
    </View>

  )
}

const styles = StyleSheet.create({
  titleImage: {
    height: 120,
    width: "100%"
  },
  photoStyle: {
    height: 200,
    width: " 50%"
  },
  title: {
    fontWeight: 'bold',
    fontSize: 27
  }
})
export default ResultShowScreen