import {useState, useEffect} from 'react'
import {BsCloudHazeFill} from 'react-icons/bs'
import { IoIosCloudy } from "react-icons/io";
import './index.css'

const CurrentWeather = props => {
  const {weatherData} = props
  const {name, main, wind, weather} = weatherData
  return (
    <div className="current-weather-bg">
      <h1>{name}</h1>
      <p>Temperature: {main.temp}</p>
      <p>Temperature: {main.humidity}</p>
      <p>Wind Speed: {wind.speed}</p>
      <div className="description-container">
        {weather[0].main === 'Haze' && <BsCloudHazeFill />}
         {weather[0].main === 'Clouds' && <IoIosCloudy />}
        <p>{weather[0].description}</p>
      </div>
    </div>
  )
}

export default CurrentWeather
