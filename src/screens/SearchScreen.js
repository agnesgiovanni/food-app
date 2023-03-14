import React, {useState} from 'react'
import { View, Text } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term,
        location: 'san jose'
      }
    }).then(res => res.data)
    // const searchApi = async () => {
    //   let response = await axios.get("https://api.yelp.com/v3/businesses/search");
    //   let { data } = res.data;
    //   setResults(data)
    // }
    console.log(response)
    setResults(response.businesses)
  }

  return (
    <View>
      <SearchBar 
        term={term} 
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi()}
      />
      <Text>Search Screen</Text>
      <Text>We have found {results.length} results</Text>
    </View>
  )
}

export default SearchScreen