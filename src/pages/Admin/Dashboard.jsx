import React, { useEffect, useState } from 'react'
import { fetchCoaches } from '../../services/coach'
import { fetchAllBookings } from '../../services/booking'
import BookingChart from '../../components/Charts/BookingChart';

export default function Dashboard() {
  const [coachCount, setCoachCount] = useState(0)
  const [bookingCount, setBookingCount] = useState(0)

   useEffect(() => {
    fetchAllBookings().then(r => {
      // 假設 r.data 是陣列，每筆有 coach.name
      const counts = {};
      r.data.forEach(b => {
        counts[b.coach.name] = (counts[b.coach.name] || 0) + 1;
      });
      setChartData(Object.entries(counts).map(([coach, count])=>({ coach, count })));
    });
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-4">後台總覽</h1>
        <BookingChart data={chartData} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-6 bg-white rounded shadow">
          <h2 className="text-xl">總教練數</h2>
          <p className="text-4xl">{coachCount}</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h2 className="text-xl">總預約數</h2>
          <p className="text-4xl">{bookingCount}</p>
        </div>
      </div>
    </div>
  )
}
