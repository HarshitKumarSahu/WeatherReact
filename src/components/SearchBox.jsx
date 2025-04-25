import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react'

export default function SearchBox() {

    const [city, setCity] = useState("")

    const API_URL = "http://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "697dc292b94c5bdc7f1c8da277d1991c"

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
        let jsonResponse = await response.json();
        console.log(jsonResponse)
    }
   

    let handleCityChange = (evt) => {
        setCity(evt.target.value)
    }

    let handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(city);
        setCity("")
        getWeatherInfo()
    }

    return(
        <>
            <h1>Weather</h1>
            <form action="" onSubmit={handleFormSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleCityChange} required/>  
                <Button variant="contained" size="large" type='submit'>Search</Button>
            </form>
        </>
    )
}