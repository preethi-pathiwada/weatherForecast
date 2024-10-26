import {Component} from 'react'

class Forecast extends Component {
  constructor(props) {
    super(props)
    this.state = {forecastData: null, error: ''}
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const apiKey = '2c617b06c078921d0eb5fd5795bd51c7'
    const cityName = this.props
    console.log(cityName)
    const response = await fetch(
      `api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`,
    )
    console.log(`api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`)
    const data = await response.json()
    if (response.ok) {
      console.log(response)
      this.setState({forecastData: data})
    } else {
      this.setState({error: data.message})
    }
  }

  render(props) {
    return (
      <>
        <h1>HEllo</h1>
      </>
    )
  }
}

export default Forecast
