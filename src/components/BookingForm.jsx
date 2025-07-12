import React from 'react'
import { useForm } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function BookingForm({ coachId, initialData, onSubmit }) {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: initialData || { date: new Date(), time: '', note: '' }
  })

  return (
    <form onSubmit={handleSubmit(d=>onSubmit({ ...d, coachId }))} className="space-y-4">
      <div>
        <label>選擇日期</label>
        <DatePicker
          selected={initialData?.date}
          onChange={date=>setValue('date', date)}
          className="input w-full"
        />
      </div>
      <div>
        <label>選擇時間</label>
        <select {...register('time')} className="input w-full">
          <option value="">請選擇</option>
          <option>08:00</option>
          <option>09:00</option>
          {/* ... */}
        </select>
      </div>
      <div>
        <label>備註</label>
        <textarea {...register('note')} className="input w-full h-24" />
      </div>
      <button type="submit" className="btn-primary w-full">
        {initialData ? '更新預約' : '立即預約'}
      </button>
    </form>
  )
}
