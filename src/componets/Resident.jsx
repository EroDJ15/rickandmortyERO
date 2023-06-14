import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Resident = ({ residentUrl }) => {
  const [residentInfo, setResidentInfo] = useState(null);

  useEffect(() => {
    axios.get(residentUrl)
      .then(({ data }) => setResidentInfo(data))
      .catch((err) => console.log(err));
  }, []);

  const circleColor = residentInfo && residentInfo.status === 'Alive' ? 'bg-green-600' : 'bg-red-600';

  return (
    <article>
      <div className='relative'>
        <img src={residentInfo?.image} alt='' className="hover:scale-110 hover:transition-transform hover:duration-300" />
        <div className='flex items-center gap-2 absolute bottom-3 left-1/2 -translate-x-1/2'>
          <div className='flex items-center'>
            <div className='items-center justify-center rounded-full border-2 border-white'>
              <div className={`h-4 w-4 rounded-full ${circleColor}`}></div>
            </div>
            <div className='ml-3 text-black font-bold text-lg'>
              {residentInfo?.status === 'Alive' ? 'Alive' : 'Dead'}
            </div>
          </div>

        </div>
      </div>
      <section>
        <h4>{residentInfo?.name}</h4>
        <ul>
          <li>Species: <span>{residentInfo?.species}</span> </li>
          <li>Gender: <span>{residentInfo?.gender}</span> </li>
          <li>Status: <span>{residentInfo?.status}</span> </li>
          <li>Origin: <span>{residentInfo?.origin?.name}</span> </li>
          <li>Location: <span>{residentInfo?.location?.name}</span> </li>
          <li>Episodes: <span>{residentInfo?.episode.length}</span> </li>
          <li>Type: <span>{residentInfo?.type === '' ? 'Unknow' : residentInfo?.type}</span></li>
        </ul>
      </section>
    </article>
  );
};

export default Resident;


