import React from 'react'
import Resident from './Resident'
import { paginationLogic } from '../util/pagination'
import { useState } from 'react'

const ResidentsList = ({ residents }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const { pages, residentsInPage } = paginationLogic(currentPage, residents)


  return (
    <section className='px-3'>

      {/*lista de residentes*/}
      <section className='grid gap-8 p-2 py-6 px-3 grid-cols-[repeat(auto-fill,_280px)] justify-center max-w-[1200px] mx-auto'>
        {residentsInPage?.map((resident) =>
          <Resident key={resident} residentUrl={resident} />)}
      </section>
      {/*paginación*/}
      <section className="flex justify-center">
        <button
          onClick={() => setCurrentPage(1)}
          className="bg-black text-white px-3 py-1 rounded-lg mx-1 hover:bg-gray-700"
        >
          Primera
        </button>

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`bg-black text-white px-3 py-1 rounded-lg mx-1 ${currentPage === page ? 'bg-gray-700' : 'hover:bg-gray-700'
              }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={
            () => setCurrentPage(pages.length)}
          className="bg-black text-white px-3 py-1 rounded-lg mx-1 hover:bg-gray-700"
        >
          Última
        </button>
      </section>






    </section>
  )
}

export default ResidentsList