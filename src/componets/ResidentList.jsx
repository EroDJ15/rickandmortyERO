import React from 'react'
import Resident from './Resident'

const ResidentsList = ({ residents }) => {

  const [currentPage, setcurrentPage] = useState(1)

  console.log(residents)
  const RESIDENTS_PER_PAGE = 20
  const totalPage = Math.ceil(residents.length / RESIDENTS_PER_PAGE);

  const sliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE
  const sliceEnd = sliceStart + RESIDENTS_PER_PAGE
  const residentsInPage = residents.slice(sliceStart, sliceEnd)

  return (
    <section className='px-3'>

      {/*lista de residentes*/}
      <section className='grid gap-8 p-2 py-6 px-3 grid-cols-[repeat(auto-fill,_280px)] justify-center max-w-[1200px] mx-auto'>
        {residents?.map((resident) =>
          <Resident key={resident} residentUrl={resident} />)}
      </section>
      {/*paginación*/}

    </section>
  )
}

export default ResidentsList