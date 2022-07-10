import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({country}) => {

const [weather, setWeather] = useState([])
  
    useEffect(() => {
        axios.get(`/api/weather/${country.latlng[0]}/${country.latlng[1]}`)
            .then(response => response.data)
            .then(response => setWeather([response]))
            .catch(error => {
            console.log(error);
        })
    }, [])

    if (weather.length > 0) {
        const currentWeather = weather[0].weather[0]
        const currentWeatherIcon = `http://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`
        return (
            <div className='country'>
                <div className='country-info'>
                    <h1>{country.name.common}</h1>
                    <p>Capital: {country.capital}</p>
                    <p>Population: {country.population}</p>
                    <p>Area: {country.area}</p>
                    <img src={country.flags.svg} alt="Country flag"></img>
                </div>
                <div className='country-weather'>
                    <h2>Weather in {country.capital}</h2>
                    <p>{currentWeather.main}</p>
                    <p>{currentWeather.description}</p>
                    <img src={currentWeatherIcon} alt="weather-icon"></img>
                </div>
            </div>
    
        )
    }
    else {
    return (
        <div className='country'>
            <div className='country-info'>
                <h1>{country.name.common}</h1>
                <p>Capital: {country.capital}</p>
                <p>Population: {country.population}</p>
                <p>Area: {country.area}</p>
                <img src={country.flags.svg} alt="Country flag"></img>
            </div>
            <div className='country-weather'>
                    <p>
                        Problems with the Weather API. 
                    </p>
            </div>
        </div>
    )
    }
}

export default Country