import React, { useEffect, useState } from 'react'
import { fetchAllBookings, updateBookingStatus, deleteBooking } from '../../services/booking'
import toast from 'react-hot-toast'
import { format } from 'date-fns'

export default function BookingsMgnt() {
  const [bookings, setBookings] = useState([])

  const load = () => fetchAllBookings().then(r=>setBookings(r.data))
  useEffect(load,[])

  const changeStatus = async (id, status) => {
    await updateBookingStatus(id, status)
    toast.success('狀態更新')
    load()
  }

  const handleDelete = async id => {
    await deleteBooking(id)
    toast.success('已刪除')
    load()
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Booking Management</h1>
      <table className="w-full bg-white rounded shadow table-auto">
        <thead>
          <tr>
            <th>Coach</th><th>User</th><th>Date</th><th>Status</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(b=>(
            <tr key={b.id} className="border-t">
              <td className="p-2">{b.coach.name}</td>
              <td>{b.user.name}</td>
              <td>{format(new Date(b.date+'T'+b.time),'yyyy/MM/dd hh:mm a')}</td>
              <td>{b.status}</td>
              <td className="space-x-2">
                {['scheduled','completed','cancelled'].map(st=>(
                  <button 
                    key={st}
                    onClick={()=>changeStatus(b.id, st)}
                    className="text-sm"
                  >
                    {st}
                  </button>
                ))}
                <button onClick={()=>handleDelete(b.id)} className="text-red-600 ml-2">刪除</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
