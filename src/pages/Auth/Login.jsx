import React from 'react'
import { useForm } from 'react-hook-form'
import { login, fetchProfile } from '../../services/auth'
import { useAuthStore } from '../../store/authStore'
import { useNavigate, Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import '../../assets/css/AuthForm.css'

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const setToken = useAuthStore(state => state.setToken)
  const setProfile = useAuthStore(state => state.setProfile)
  const navigate = useNavigate()

  const onSubmit = async data => {
    try {
      const res = await login(data)
      setToken(res.data.token)
      const prof = await fetchProfile()
      setProfile(prof.data)
      toast.success('登入成功')
      navigate('/')
    } catch {
      toast.error('帳號或密碼錯誤')
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-panel">
        <h2 className="text-3xl font-bold mb-6">Log In</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label>Email</label>
            <input {...register('email',{ required: true })} className="input w-full"/>
            {errors.email && <span className="text-red-500">必填</span>}
          </div>
          <div>
            <label>Password</label>
            <input type="password" {...register('password',{ required:true })} className="input w-full"/>
            {errors.password && <span className="text-red-500">必填</span>}
          </div>
          <button type="submit" className="btn-primary w-full">Log In</button>
          <p className="mt-2 text-sm">
            還沒有帳號？<Link to="/register" className="text-blue-600">註冊</Link>
          </p>
        </form>
      </div>
      <div className="auth-divider"></div>
      <div className="auth-panel bg-gray-50">
        <h2 className="text-3xl font-bold mb-6">Register</h2>
        <Link to="/register" className="btn-secondary">前往註冊</Link>
      </div>
    </div>
  )
}
