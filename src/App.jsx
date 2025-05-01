import { useState } from 'react'
import "@fontsource/poppins";
import './App.css'
import WeatherApp from './components/WeatherApp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WeatherApp/>
    </>
  )
}

export default App
