import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'

export default function CoachCard({ coach }) {
  return (
    <div className="border rounded p-4 flex flex-col">
      <img src={coach.avatarUrl} alt="" className="w-full h-48 object-cover rounded"/>
      <h3 className="mt-2 font-semibold text-lg">{coach.name}</h3>
      <p className="text-sm text-gray-500">{coach.specialty}</p>
      <Link
        to={`/coaches/${coach.id}`}
        className="mt-auto btn-primary"
      >
        查看詳情
      </Link>
    </div>
  )
}
