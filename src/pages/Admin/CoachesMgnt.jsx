import React, { useEffect, useState } from 'react'
import { fetchCoaches, createCoach, updateCoach, deleteCoach } from '../../services/coach'
import toast from 'react-hot-toast'
import { useCoaches } from '../../query/coaches';
import Loading from '../../components/Loading';
// ...
const { data, isLoading, error, refetch } = useCoaches({ page, ...filters });
if (isLoading) return <Loading />;
if (error) return <div>讀取失敗</div>;
// data.items: 教練陣列, data.totalPages


export default function CoachesMgnt() {
  const [coaches, setCoaches] = useState([])
  const [form, setForm] = useState({ name:'', specialty:'', price:0, location:'' })
  const [editingId, setEditingId] = useState(null)

  const load = () => fetchCoaches().then(r=>setCoaches(r.data.items))
  useEffect(load,[])

  const handleSave = async () => {
    try {
      if(editingId) {
        await updateCoach(editingId, form)
        toast.success('更新成功')
      } else {
        await createCoach(form)
        toast.success('新增成功')
      }
      setForm({ name:'', specialty:'', price:0, location:'' })
      setEditingId(null)
      load()
    } catch {
      toast.error('操作失敗')
    }
  }

  const handleEdit = c => {
    setForm({ name:c.name, specialty:c.specialty, price:c.price, location:c.location })
    setEditingId(c.id)
  }

  const handleDelete = async id => {
    await deleteCoach(id)
    toast.success('已刪除')
    load()
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Coach Management</h1>
      <div className="grid grid-cols-4 gap-4">
        {['name','specialty','price','location'].map(k=>(
          <div key={k}>
            <label>{k}</label>
            <input
              value={form[k]}
              onChange={e=>setForm(f=>({...f,[k]: e.target.value}))}
              className="input w-full"
            />
          </div>
        ))}
        <button onClick={handleSave} className="btn-primary self-end">
          {editingId ? '更新' : '新增'}
        </button>
      </div>

      <table className="w-full bg-white rounded shadow table-auto">
        <thead>
          <tr>
            <th>Name</th><th>Type</th><th>Location</th><th>Price</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {coaches.map(c=>(
            <tr key={c.id} className="border-t">
              <td className="p-2">{c.name}</td>
              <td>{c.specialty}</td>
              <td>{c.location}</td>
              <td>{c.price}</td>
              <td className="space-x-2">
                <button onClick={()=>handleEdit(c)} className="text-blue-600">編輯</button>
                <button onClick={()=>handleDelete(c.id)} className="text-red-600">刪除</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
