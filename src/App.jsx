import { useState } from 'react'
import "@fontsource/poppins";
import './App.css'
import SearchBox from './components/SearchBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchBox/>
    </>
  )
}

export default App
