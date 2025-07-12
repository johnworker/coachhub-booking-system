import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'

export default function Navbar() {
  const { token, profile, logout } = useAuthStore()
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto flex justify-between p-4">
        <Link to="/" className="text-xl font-bold">CoachHub</Link>
        <div className="space-x-4">
          {token ? (
            <>
              <Link to="/coaches">教練列表</Link>
              <Link to="/my-bookings">我的預約</Link>
              <Link to="/settings">設定</Link>
              {profile?.role==='admin' && <Link to="/admin">後台</Link>}
              <button onClick={logout} className="text-red-500">登出</button>
            </>
          ) : (
            <>
              <Link to="/login">登入</Link>
              <Link to="/register">註冊</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
