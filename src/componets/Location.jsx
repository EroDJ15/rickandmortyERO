import React from 'react';
import axios from 'axios';

const Location = ({ location, setLocation }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target.newLocation.value;

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`;
    axios
      .get(URL)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err));
  };

  return (
    <section>
      {/* Logo */}
      <div className="flex items-center justify-center py-4">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/19643055883023.5996f8afa3a8f.gif"
          alt="HBO Max Logo"
          className="w-8/12 h-auto p-1 py-5"
        />
      </div>

      {/* Búsqueda */}
      <section className="flex items-center justify-center py-4 flex-wrap">
        <form onSubmit={handleSubmit} className="flex flex-wrap items-center justify-center">
          <input id="newLocation" placeholder="Type location ID....." type="text" className="mr-1 rounded-2xl text-black font-semibold text-center" />
          <button type="submit" className="flex items-center bg-black text-white justify-center px-2 rounded-2xl">
            <img
              src="http://www.animated-gifs.fr/category_cartoons/rick-morty/rick-and-morty-90632132.gif"
              alt="Rick and Morty GIF"
              className="w-5 h-5 mr-2"
            />
            <span className="font-bold">Search</span>
          </button>
        </form>
      </section>

      {/* Información de la ubicación */}
      <section className="flex flex-col items-center justify-start mt-2">
        {location && (
          <div className="text-center p-4 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">{location.name}</h2>
            <ul>
              <li>
                <span className="font-semibold">Type:</span> {location.type}
              </li>
              <li>
                <span className="font-semibold">Dimension:</span> {location.dimension}
              </li>
              {location.residents?.length > 0 ? (
                <li>
                  <span className="font-semibold">Residents:</span> {location.residents.length}
                </li>
              ) : (
                <li>
                  No residents here. There's nothing here. Searching is pain. You better go back and try again.
                </li>
              )}
            </ul>
          </div>
        )}
        {!location?.residents?.length && (
          <img
            src="https://www.xtrafondos.com/wallpapers/resized/morty-malvado-minimalista-9384.jpg?s=large"
            alt="No habitantes"
            className="mt-3 p-2 py-2"
          />
        )}
      </section>
    </section>
  );
};

export default Location;


