import React from 'react'
import { useForm } from 'react-hook-form'
import { register as apiRegister } from '../../services/auth'
import { useNavigate, Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import '../../assets/css/AuthForm.css'

export default function Register() {
  const { register, handleSubmit, watch, formState:{ errors }} = useForm()
  const navigate = useNavigate()
  const onSubmit = async data => {
    try {
      await apiRegister(data)
      toast.success('註冊成功，請登入')
      navigate('/login')
    } catch {
      toast.error('註冊失敗，請稍後再試')
    }
  }
  return (
    <div className="auth-container">
      <div className="auth-panel bg-gray-50">
        <h2 className="text-3xl font-bold mb-6">Log In</h2>
        <Link to="/login" className="btn-secondary">前往登入</Link>
      </div>
      <div className="auth-divider"></div>
      <div className="auth-panel">
        <h2 className="text-3xl font-bold mb-6">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label>Name</label>
            <input {...register('name',{ required:true })} className="input w-full"/>
            {errors.name && <span className="text-red-500">必填</span>}
          </div>
          <div>
            <label>Email</label>
            <input {...register('email',{ required:true })} className="input w-full"/>
            {errors.email && <span className="text-red-500">必填</span>}
          </div>
          <div>
            <label>Password</label>
            <input type="password" {...register('password',{ required:true, minLength:6 })} className="input w-full"/>
            {errors.password && <span className="text-red-500">至少6字</span>}
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              {...register('confirm',{ validate: v=> v===watch('password') })}
              className="input w-full"
            />
            {errors.confirm && <span className="text-red-500">密碼不相符</span>}
          </div>
          <button type="submit" className="btn-primary w-full">Register</button>
        </form>
      </div>
    </div>
  )
}
