import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react'

export default function SearchBox() {
    const [city, setCity] = useState("")

    let handleCityChange = (evt) => {
        setCity(evt.target.value)
    }

    let handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(city);
        setCity("")
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