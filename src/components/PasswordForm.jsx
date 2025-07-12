import React from 'react'
import { useForm } from 'react-hook-form'
import { changePassword } from '../services/auth'
import toast from 'react-hot-toast'

export default function PasswordForm() {
  const { register, handleSubmit, watch, formState:{ errors }} = useForm()
  const onSubmit = async data => {
    try {
      await changePassword(data)
      toast.success('密碼已更新')
    } catch {
      toast.error('更新失敗，請檢查舊密碼')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-8">
      <h3 className="text-xl font-bold">Change Password</h3>
      <div>
        <label>Current Password</label>
        <input type="password" {...register('currentPassword',{ required:true })} className="input w-full"/>
      </div>
      <div>
        <label>New Password</label>
        <input type="password" {...register('newPassword',{ required:true, minLength:6 })} className="input w-full"/>
      </div>
      <div>
        <label>Confirm New</label>
        <input
          type="password"
          {...register('confirmNew',{ validate: v=> v===watch('newPassword') })}
          className="input w-full"
        />
        {errors.confirmNew && <span className="text-red-500">不相符</span>}
      </div>
      <button type="submit" className="btn-primary">更新密碼</button>
    </form>
  )
}
