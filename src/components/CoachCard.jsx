import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'

export default function CoachCard({ coach }) {
return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <img
        src={coach.avatarUrl}
        alt={coach.name}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="mt-3 text-lg font-semibold">{coach.name}</h3>
      <p className="text-sm text-gray-500">{coach.specialty}</p>
      <Link
        to={`/coaches/${coach.id}`}
        className="mt-auto bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700"
      >
        查看詳情
      </Link>
    </div>
  );
}
