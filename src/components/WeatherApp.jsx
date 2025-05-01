import { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox';

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Bilaspur",
    temp: 42,
    tempMin: 26,
    tempMax: 46,
    humidity: 47,
    feelsLike: 43.85,
    weather: "haze",
  })

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo)
  }

  return (
    <>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </>
  )
}

