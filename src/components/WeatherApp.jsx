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
    <main className="w-full h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D')"}}>
      <div className="left w-2/3 h-[100%]  flex items-center justify-center flex-col p-16 text-[#f8f8f8]">
        <nav className='top h-[50%] w-full'>
          <p className='mix-blend-difference font-extrabold'>the.weather</p>
        </nav>
        <div className="bottom h-[50%] w-full flex items-end justify-start">
          <div className='flex items-center justify-center gap-6'>
            <div className="temp">
              <h1 className="text-[6.5vw] mix-blend-difference font-extrabold">{weatherInfo.temp}&deg;c</h1>
            </div>
            <div className="location">
              <h1 className='mix-blend-difference text-6xl font-bold'>{weatherInfo.city}</h1>
              <div className="datetime flex items-center justify-center gap-4">
                <p className='mix-blend-difference'>{date}</p>
                <p className='mix-blend-difference'>{time}</p>
                <p className='mix-blend-difference'>{day}</p>
              </div>
            </div>
          </div>
          

        </div>
      </div>
      <div className="right left w-1/3 h-[100%] flex items-center justify-center flex-col p-16 text-[#f8f8f8] inset-0 bg-zinc bg-opacity-35 backdrop-blur-md">
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
      </div>
    </main>
    </>
  )
}

