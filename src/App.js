import axios from 'axios'
import { useState, useEffect } from "react"
import Search from "./components/Search"
import Results from "./components/Results"
import Footer from "./components/Footer"
import "./App.css"

const App = () => {

  const [filteredCountries, setFilteredCountries] = useState([])
  const [allCountries, setAllCountries] = useState([])
  const [keyword, setKeyword] = useState("Sri Lanka")
  
  //fetch data from API
  useEffect(() => {
    axios
      .get('/api/country')
      .then(response => {
        console.log('fetching completed')
        setAllCountries(response.data)
      })
  }, [])

  //handle search
  const handleKeyword = (event) => {
    setKeyword(event.target.value)
    if (keyword) {
      const search = new RegExp( keyword, 'i' );
      const filter = () => allCountries.filter(country => JSON.stringify(country.name).match(search))
      setFilteredCountries(filter)
    }
  }

  
  return(
    <div className='container'>
    <Search value={keyword} onChange={handleKeyword}/>
    <Results countries={filteredCountries} setCountries={setFilteredCountries}/>
    <Footer className="footer" />
    </div>
  )
}

export default App;
