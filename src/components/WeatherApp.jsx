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
    // weather: "clear sky",
    weather: "snow"
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

  const sampleImg = "https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    
  const weatherImages = {
      "clear sky": "https://images.unsplash.com/photo-1623846736569-1d90cba76d65?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNsZWFyJTIwc2t5fGVufDB8fDB8fHww",
      "few clouds": "https://images.unsplash.com/photo-1742098987950-02fa9b8230e5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZldyUyMGNsb3Vkc3xlbnwwfHwwfHx8MA%3D%3D",
      "scattered clouds": "https://images.unsplash.com/photo-1499346030926-9a72daac6c63",
      "broken clouds": "https://images.unsplash.com/photo-1684180448316-fb4a07a87078?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJyb2tlbiUyMGNsb3Vkc3xlbnwwfHwwfHx8MA%3D%3D",
      "overcast clouds": "https://images.unsplash.com/photo-1719958805412-046289afa93e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3ZlcmNhc3QlMjBjbG91ZHN8ZW58MHx8MHx8fDA%3D",
      "light rain": "https://images.unsplash.com/photo-1527766833261-b09c3163a791?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGlnaHQlMjByYWlufGVufDB8fDB8fHww",
      "moderate rain": "https://images.unsplash.com/photo-1685731840342-893fdd8074e0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZXJhdGUlMjByYWlufGVufDB8fDB8fHww",
      "heavy intensity rain": "https://images.unsplash.com/photo-1434118489318-42a0e62c6235?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "thunderstorm": "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGh1bmRlcnN0b3JtfGVufDB8fDB8fHww",
      "snow": "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNub3d8ZW58MHx8MHx8fDA%3D",
      "fog": "https://images.unsplash.com/photo-1543968996-ee822b8176ba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWlzdHxlbnwwfHwwfHx8MA%3D%3D",
      "mist": "https://plus.unsplash.com/premium_photo-1669802766544-40eba66c4fa0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWlzdHxlbnwwfHwwfHx8MA%3D%3D",
      "haze": "https://images.unsplash.com/photo-1530809783266-c54e7919f95d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGF6ZXxlbnwwfHwwfHx8MA%3D%3D",
      "smoke": "https://images.unsplash.com/photo-1609609014985-bfd695dad544?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNtb2tlfGVufDB8fDB8fHww"
  };
  
  const bgUrl = weatherImages[weatherInfo.weather] || sampleImg;

  return (
    <>
    {/* <main className="w-full h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D')"}}> */}
    <main className="w-full h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('${bgUrl}')` }}>
      <div className="left w-2/3 h-[100%]  flex items-center justify-center flex-col p-24 text-[#f8f8f8]">
        <nav className='top h-[50%] w-full'>
          <p className='mix-blend-difference font-extrabold'>the.weather</p>
        </nav>
        <div className="bottom h-[50%] w-full flex items-end justify-start">
          <div className='flex items-center justify-center gap-6'>
            <div className="temp">
              <h1 className="text-[6.5vw] font-extrabold">{weatherInfo.temp}&deg;c</h1>
            </div>
            <div className="location">
              <h1 className='text-6xl font-bold'>{weatherInfo.city}</h1>
              <div className="datetime flex items-center justify-center gap-4 mt-4">
                <p className=''>{date}</p>
                <p className=''>{time}</p>
                <p className=''>{day}</p>
              </div>
            </div>
          </div>
          

        </div>
      </div>
      <div className="right left w-1/3 h-[100%] flex items-center justify-center flex-col p-16 text-zinc inset-0 bg-black bg-opacity-25 backdrop-blur-lg">
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
      </div>
    </main>
    </>
  )
}

