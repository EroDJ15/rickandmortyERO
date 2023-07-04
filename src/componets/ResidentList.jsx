import React, { useState, useEffect } from 'react';
import Resident from './Resident';
import { paginationLogic } from '../util/pagination';

const ResidentsList = ({ residents }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { pages, residentsInPage } = paginationLogic(currentPage, residents);

  useEffect(() => {
    setCurrentPage(1); // Restablecer la página actual a 1 cuando cambia la dimensión
  }, [residents]);

  return (
    <section className="px-3">
      {/* Lista de residentes */}
      <section className="grid gap-8 p-2 py-6 px-3 grid-cols-[repeat(auto-fill,_280px)] justify-center max-w-[1200px] mx-auto">
        {residentsInPage?.map((resident) => (
          <Resident key={resident} residentUrl={resident} />
        ))}
      </section>
      {/* Paginación */}
      <section className="flex justify-center">
        <button
          onClick={() => setCurrentPage(1)}
          className="bg-black text-white px-3 py-1 rounded-lg mx-1 hover:bg-slate-900"
        >
          Primera
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`bg-black text-white px-3 py-1 rounded-lg mx-1 ${currentPage === page ? 'bg-slate-900' : 'hover:bg-slate-900'
              }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(pages.length)}
          className="bg-black text-white px-3 py-1 rounded-lg mx-1 hover:bg-slate-900"
        >
          Última
        </button>
      </section>
    </section>
  );
};

export default ResidentsList;
