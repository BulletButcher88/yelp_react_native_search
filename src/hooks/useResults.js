import React, { useState, useEffect } from 'react'

import yelp from '../api/yelp'

export default () => {

  const [results, setResults] = useState([])
  const [error, setError] = useState('')

  const searchApi = async (searchTerm) => {
    try {

      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'melbourne'
        }
      })
      setResults(response.data.businesses)
    } catch (err) {
      setError("error happened")
    }
  }

  useEffect(() => {
    searchApi('la')
  }, [])

  return [searchApi, results, error]
}