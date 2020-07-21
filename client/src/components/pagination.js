import React from 'react'

 const pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <nav className="pages">
      {pageNumbers.map(number => (
        <li key={number}>
          <a onClick={() => paginate(number)} href={`#/${number}`}>
            {number}
          </a>
        </li>
      ))}
    </nav>
  )
 }

 export default pagination
