import React from 'react'

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i+1)
  return (
    <div className="flex space-x-2 justify-center mt-4">
      {pages.map(p=>(
        <button
          key={p}
          onClick={()=>onPageChange(p)}
          className={`px-3 py-1 rounded ${p===currentPage?'bg-blue-500 text-white':'border'}`}
        >
          {p}
        </button>
      ))}
    </div>
  )
}
