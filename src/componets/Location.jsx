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
      <section className="flex items-center justify-center py-5 flex-wrap w-auto">
        <form onSubmit={handleSubmit} className="flex flex-wrap items-center justify-center">
          <input id="newLocation" placeholder="Type location ID....." type="text" className="mr-1 rounded-2xl text-black font-semibold text-center" />
          <button type="submit" className="flex items-center bg-black text-white justify-center px-2 rounded-2xl">
            <img src="http://www.animated-gifs.fr/category_cartoons/rick-morty/rick-and-morty-90632132.gif" alt="Rick and Morty GIF" className="w-5 h-5 mr-2" />
            <span className="font-bold flex-col justify-center p-2">Search</span>
          </button>
        </form>
      </section>


      {/*info location*/}
      <section className="flex flex-col items-center justify-start -mt-2">
        {location && (
          <div className="text-center">
            <h2 className="mb-0">{location.name}</h2>
            <ul>
              <li>Type: {location.type}</li>
              <li>Dimension: {location.dimension}</li>
              {location.residents?.length > 0 ? (
                <li>Residents: {location.residents.length}</li>
              ) : (
                <li>no residents here <br />there's nothing here . searching is pain you better go back and try again</li>
              )}
            </ul>
          </div>
        )}
        {!location?.residents?.length && (
          <img src="https://p4.wallpaperbetter.com/wallpaper/484/328/985/quote-rick-and-morty-rick-sanchez-humor-wallpaper-preview.jpg" alt="No habitantes" className="mt-3 p-2 py-2" />
        )}

      </section>
    </section>
  )
}

export default Location
