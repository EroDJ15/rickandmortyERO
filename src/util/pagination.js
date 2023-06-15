export const paginationLogic = (currentPage, residents) => {
  if (!residents) {
    return {
      residentsInPage: [],
      pages: [1]
    }
  }

  const RESIDENTS_PER_PAGE = 20
  const totalPages = Math.max(Math.ceil(residents.length / RESIDENTS_PER_PAGE), 1);

  const sliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE
  const sliceEnd = sliceStart + RESIDENTS_PER_PAGE
  const residentsInPage = residents.slice(sliceStart, sliceEnd)

  // generación de arreglo para mostrar páginas
  const pages = []
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }

  return {
    residentsInPage,
    pages
  }
}


