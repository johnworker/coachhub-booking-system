import React, { useState, useEffect } from 'react'
import { fetchCoaches } from '../../services/coach'
import CoachCard from '../../components/CoachCard'
import FilterBar from '../../components/FilterBar'
import Pagination from '../../components/Pagination'

export default function InstructorList() {
  const [filters, setFilters] = useState({})
  const [page, setPage] = useState(1)
  const [data, setData] = useState({ coaches: [], totalPages: 1 })

  useEffect(() => {
    fetchCoaches({ ...filters, page })
      .then(res => setData({
        coaches: res.data.items,
        totalPages: res.data.totalPages
      }))
  }, [filters, page])

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">教練列表</h1>
      <FilterBar onFilter={setFilters}/>
      <div className="grid grid-cols-4 gap-6">
        {data.coaches.map(c => <CoachCard key={c.id} coach={c}/>)}
      </div>
      <Pagination
        currentPage={page}
        totalPages={data.totalPages}
        onPageChange={setPage}
      />
    </>
  )
}
