import React, { useEffect } from 'react'
import { fetchMyBookings, deleteBooking } from '../../services/booking'
import { useBookingStore } from '../../store/bookingStore'
import BookingTable from '../../components/BookingTable'
import toast from 'react-hot-toast'

export default function MyBookings() {
  const { bookings, setBookings } = useBookingStore()

  const load = () => {
    fetchMyBookings().then(res => setBookings(res.data))
  }
  useEffect(load, [])

  const handleCancel = id => {
    deleteBooking(id)
      .then(()=> {
        toast.success('已取消')
        load()
      })
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">我的預約</h1>
      <BookingTable
        bookings={bookings}
        onEdit={b=>{/* 導到 /booking/:coachId, 並帶 bookingId */}}
        onCancel={handleCancel}
      />
    </>
  )
}
