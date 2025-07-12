import React from 'react'
import { QRCodeCanvas } from 'qrcode.react'
import { format } from 'date-fns'
import toast from 'react-hot-toast'

export default function BookingTable({ bookings, onEdit, onCancel }) {
  const copyQR = code => {
    navigator.clipboard.writeText(code)
    toast.success('已複製預約碼')
  }

  return (
    <table className="w-full table-auto border-collapse">
      <thead>
        <tr>
          <th>教練</th><th>日期</th><th>狀態</th><th>操作</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map(b=>(
          <tr key={b.id} className="border-t">
            <td className="py-2 flex items-center">
              <img src={b.coach.avatarUrl} alt="" className="w-10 h-10 rounded-full mr-2"/>
              {b.coach.name}
            </td>
            <td>{format(new Date(b.date+'T'+b.time), 'yyyy/MM/dd hh:mm a')}</td>
            <td>{b.status}</td>
            <td className="space-x-2">
              <button onClick={()=>copyQR(b.code)}>複製 QR</button>
              <button onClick={()=>onEdit(b)}>編輯</button>
              <button onClick={()=>onCancel(b.id)}>取消</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
