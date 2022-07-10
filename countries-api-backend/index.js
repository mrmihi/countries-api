const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

//Get all country data, when a request is made to api/country
app.get('/api/country', (request, response) => {
  
  axios.get("https://restcountries.com/v3.1/all")
    .then(response => {
      return(response.data)})
    .then(data => {response.json(data)})
    .catch(error => console.log('Error to fetch data\n'))
})


//Get weather data, when a request is made to api/weather
app.get('/api/weather/:lat/:lng', (request, response) => {
  const lat = request.params.lat
  const lng = request.params.lng
  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=[YOUR API KEY]`)
  // Add your API key in the above line you can get a API key from https://openweathermap.org/
    .then(response => {
      return(response.data)})
    .then(data => {response.json(data)})
    .catch(error => console.log('Error to fetch data\n'))
})



const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})