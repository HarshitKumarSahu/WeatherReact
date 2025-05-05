import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react'
import InfoBox from './InfoBox';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBox({updateInfo}) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false)



    const API_URL = "http://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "697dc292b94c5bdc7f1c8da277d1991c"

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
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
            {/* <h1>Weather</h1> */}
            <form action="" onSubmit={handleFormSubmit} className='mb-4 text-[#f8f8f8] flex items-center justify-center flex-col'>
                {/* <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleCityChange} required/>   */}
                {/* <TextField className='text-[#f8f8f8] mix-blend-difference w-full' id="city" label="City Name" value={city} onChange={handleCityChange} required variant="standard" /> */}
                <div className='flex items-center justify-center'>
                    <TextField
                        id="city"
                        label="City Name"
                        value={city}
                        onChange={handleCityChange}
                        required
                        variant="standard"
                        fullWidth
                        InputProps={{
                            style: { color: '#d3d3d3' }  // Text color
                        }}
                        InputLabelProps={{
                            style: { color: '#d3d3d3' }  // Label color
                        }}
                    />
                    {/* <Button variant="contained" size="large" type='submit' style={{marginLeft:"1rem"}}><SearchIcon/></Button>  */}
                    <Button
                        variant="contained"
                        size="large"
                        type="submit"
                        style={{
                            marginLeft: '1rem',
                            backgroundColor: '#f87c56',   // custom dark blue
                            color: '#f8f8f8'
                        }}
                    >
                        <SearchIcon />
                    </Button>
                </div>
                
                {error && <p style={{color:"red"}}>No Such Place In Our API</p>}
            </form>
        </>
    )
}