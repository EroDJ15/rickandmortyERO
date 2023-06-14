import { useEffect } from 'react'
import './App.css'
import { getRamdonDimesion } from './util/random'
import axios from 'axios'
import { useState } from 'react'
import Location from './componets/Location'
import ResidentsList from './componets/ResidentList'


function App() {

  const [location, setLocation] = useState(null)

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRamdonDimesion()}`
    axios.get(URL)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err))


  }, [])


  return (
    <main className='bg-black min-h-screen text-white'>
      <Location location={location} setLocation={setLocation} />
      <ResidentsList residents={location?.residents} />
    </main>
  )
}

export default App
