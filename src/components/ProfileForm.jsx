import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { updateProfile } from '../services/auth'
import toast from 'react-hot-toast'

export default function ProfileForm({ initial }) {
  const { register, handleSubmit } = useForm({ defaultValues: initial })
  const [avatar, setAvatar] = useState(null)

  const onSubmit = async data => {
    const fd = new FormData()
    if (avatar) fd.append('avatar', avatar)
    fd.append('name', data.name)
    fd.append('email', data.email)
    fd.append('phone', data.phone)
    try {
      await updateProfile(fd)
      toast.success('已更新個人資料')
    } catch {
      toast.error('更新失敗')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label>大頭貼</label>
        <input 
          type="file" 
          accept="image/*"
          onChange={e=>setAvatar(e.target.files[0])}
          className="input"
        />
      </div>
      <div>
        <label>姓名</label>
        <input {...register('name',{ required:true })} className="input w-full"/>
      </div>
      <div>
        <label>Email</label>
        <input {...register('email',{ required:true })} className="input w-full"/>
      </div>
      <div>
        <label>Phone</label>
        <input {...register('phone')} className="input w-full"/>
      </div>
      <button type="submit" className="btn-primary">儲存</button>
    </form>
  )
}
