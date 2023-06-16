import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Resident = ({ residentUrl }) => {
  const [residentInfo, setResidentInfo] = useState(null);

  useEffect(() => {
    axios
      .get(residentUrl)
      .then(({ data }) => setResidentInfo(data))
      .catch((err) => console.log(err));
  }, []);

  const circleColor = residentInfo && residentInfo.status === 'Alive' ? 'bg-green-600' : 'bg-red-600';

  return (
    <article className="flex flex-col items-center bg-transparent rounded-lg shadow-lg p-4 mb-4 border border-blue-500">
      <div className="relative">
        <div className="border-2 border-white rounded-lg overflow-hidden">
          <img
            src={residentInfo?.image}
            alt=""
            className="hover:scale-105 hover:transition-transform hover:duration-300"
          />
        </div>
        <div className="flex items-center justify-center absolute bottom-3 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center">
            <div className="items-center justify-center rounded-full border-2 border-white">
              <div
                className={`h-4 w-4 rounded-full ${residentInfo?.status === 'Alive'
                  ? 'bg-green-600' // Si el estado es "Alive", el círculo es verde
                  : residentInfo?.status === 'Dead'
                    ? 'bg-red-600' // Si el estado es "Dead", el círculo es rojo
                    : 'bg-gray-600' // Si el estado es "unknown", el círculo es gris
                  }`}
              ></div>
            </div>
            <div className="ml-3 text-black font-bold text-lg">
              {residentInfo?.status === 'unknown' ? 'Unknown' : residentInfo?.status === 'Alive' ? 'Alive' : 'Dead'}
            </div>
          </div>
        </div>
      </div>

      <section className="mt-4">
        <h4 className="text-2xl font-bold">{residentInfo?.name}</h4>
        <ul className="mt-2">
          <li>
            <span className="font-bold">Species:</span> {residentInfo?.species}
          </li>
          <li>
            <span className="font-bold">Gender:</span> {residentInfo?.gender}
          </li>
          <li>
            <span className="font-bold">Status:</span> {residentInfo?.status}
          </li>
          <li>
            <span className="font-bold">Origin:</span> {residentInfo?.origin?.name}
          </li>
          <li>
            <span className="font-bold">Location:</span> {residentInfo?.location?.name}
          </li>
          <li>
            <span className="font-bold">Episodes:</span> {residentInfo?.episode.length}
          </li>
          <li>
            <span className="font-bold">Type:</span> {residentInfo?.type === '' ? 'Unknown' : residentInfo?.type}
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Resident;






