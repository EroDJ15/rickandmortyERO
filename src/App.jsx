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
      <footer className='flex flex-col items-center mt-auto py-4 bg-primary dark:text-cyan-50 '>
        <p className="dark:text-cyan-50 text-xs font-semibold text-center">
          &copy; 2023 Todos los derechos reservados
        </p>
        <a
          href="https://github.com/EroDJ15"
          target="_blank"
          rel="noopener noreferrer"
          className="dark:text-cyan-50 text-xs font-semibold flex items-center mt-0 p-2"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/000000/github.png"
            alt="github"
            className="w-4 h-4 mr-1 dark:text-cyan-50"
          />
          Created by: Jerovic Pino
        </a>
      </footer>


    </main>


  )

}

export default App
