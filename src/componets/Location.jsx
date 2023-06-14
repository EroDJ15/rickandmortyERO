import React from 'react'
import axios from 'axios'

function Location({ location, setLocation }) {

  const handleSubmit = (e) => {
    e.preventDefault()
    const newLocation = e.target.newLocation.value

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`
    axios.get(URL)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err))

  }

  return (
    <section>
      {/*busqueda*/}

      <form onSubmit={handleSubmit}>
        <div className="flex items-center py-3 px-3">
          <input id='newLocation' placeholder="Type location ID....." type="text" className="mr-1 rounded-2xl text-black font-semibold" />
          <button type="submit" className="flex items-center bg-black text-white  justify-items-center px-2 rounded-2xl">
            <img src="http://www.animated-gifs.fr/category_cartoons/rick-morty/rick-and-morty-90632132.gif" alt="Rick and Morty GIF" className="w-5 h-5 mr-2" />
            <span className='font-bold'>Search</span>
          </button>
        </div>
      </form>





      {/*info location*/}
      <section>
        <h2>{location?.name}</h2>
        <ul>
          <li>Type: {location?.type}</li>
          <li>Dimension: {location?.dimension}</li>
          <li>Residents: {location?.residents.length}</li>
        </ul>

      </section>

    </section>
  )
}

export default Location