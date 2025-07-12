import React from 'react'
import { useAuthStore } from '../../store/authStore'
import ProfileForm from '../../components/ProfileForm'
import PasswordForm from '../../components/PasswordForm'

export default function Settings() {
  const profile = useAuthStore(state=>state.profile)
  return (
    <div className="max-w-xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold">User Settings</h1>
      {profile && (
        <>
          <ProfileForm initial={profile}/>
          <PasswordForm/>
        </>
      )}
    </div>
  )
}
