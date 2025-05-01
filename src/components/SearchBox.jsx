import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react'
import InfoBox from './InfoBox';

export default function SearchBox({updateInfo}) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false)

    const API_URL = "http://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "697dc292b94c5bdc7f1c8da277d1991c"

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            // console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            }
            // console.log(result)
            return result;
        } catch(err) {
            // setError("No Such Place In Our API")
            throw err;
        }

    }
   

    let handleCityChange = (evt) => {
        setCity(evt.target.value)
    }

    let handleFormSubmit = async (e) => {
        try {
            e.preventDefault()
            console.log(city);
            setCity("")
            let newInfo = await getWeatherInfo()
            updateInfo(newInfo);
        } catch(err) {
            setError(true)
        }
    }

    return(
        <>
            <h1>Weather</h1>
            <form action="" onSubmit={handleFormSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleCityChange} required/>  
                <Button variant="contained" size="large" type='submit' style={{marginLeft:"1rem"}}>Search</Button> 
                <br />
                {error && <p style={{color:"red"}}>No Such Place In Our API</p>}
            </form>
        </>
    )
}