import { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox';

export default function WeatherApp() {

  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    temp: 32,
    tempMin: 31.74,
    tempMax: 35,
    humidity: 20,
    feelsLike: 30.68,
    weather: "clear sky",
  })

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo)
  }

  function getCurrentDate() {
    const timestamp = Date.now();
    const date = new Date(timestamp);
  
    const formattedDate = date.toLocaleDateString();  
    const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayOfWeek = daysOfWeek[date.getDay()];
  
    return {
      date: formattedDate,
      time: formattedTime,
      day: dayOfWeek
    };
  }

  const { date, time, day } = getCurrentDate();

  return (
    <>
    <main style={{width:"100%", height:"100%",backgroundColor:"aqua",}}>
      <div className="left">
        <nav></nav>
        <div className="bottom">
          <div className="temp">
            <h1>{weatherInfo.temp}&deg;c</h1>
          </div>
          <div className="location">
            <h1>{weatherInfo.city}</h1>
            <div className="datetime">
              <p>{date}</p>
              <p>{time}</p>
              <p>{day}</p>
            </div>
          </div>

        </div>
      </div>
      <div className="right">
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
      </div>
    </main>
    </>
  )
}

