import {Component} from 'react'
import './App.css'

import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast'

class App extends Component {
  state = {cityName: '', weatherData: null, error: ''}

  componentDidMount() {
    this.getResults()
  }

  getResults = async () => {
    const apiKey = '2c617b06c078921d0eb5fd5795bd51c7'
    const {cityName} = this.state
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`,
    )

    const data = await response.json()
    if (response.ok) {
      this.setState({weatherData: data, cityName: ''})
    } else {
      this.setState({error: data.message})
    }
  }

  onChangeCity = event => {
    this.setState({cityName: event.target.value})
  }

  clickSearch = () => {
    this.getResults()
  }

  render() {
    const {cityName, error, weatherData} = this.state

    return (
      <>
        <div className="bg-container">
          <div className="search-container">
            <input
              className="input-container"
              type="search"
              onChange={this.onChangeCity}
              value={cityName}
            />
            <button className="search-btn" onClick={this.clickSearch}>
              Search
            </button>
          </div>
          {weatherData !== null ? (
            <CurrentWeather weatherData={weatherData} />
          ) : (
            <p>{error}</p>
          )}
          <Forecast cityName={cityName} />
        </div>
      </>
    )
  }
}

export default App
