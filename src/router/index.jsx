import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProtectedRoute from '../components/ProtectedRoute'
import AdminRoute from '../components/AdminRoute'

import Home from '../pages/Home/Home'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import InstructorList from '../pages/Instructors/InstructorList'
import InstructorDetail from '../pages/Instructors/InstructorDetail'
import Booking from '../pages/Booking/Booking'
import MyBookings from '../pages/MyBookings/MyBookings'
import Settings from '../pages/Settings/Settings'
import Dashboard from '../pages/Admin/Dashboard'
import NotFound from '../pages/NotFound'

const router = createBrowserRouter([
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },

  { path: '/', element: <ProtectedRoute><Home /></ProtectedRoute> },
  { path: '/coaches', element: <ProtectedRoute><InstructorList /></ProtectedRoute> },
  { path: '/coaches/:id', element: <ProtectedRoute><InstructorDetail /></ProtectedRoute> },
  { path: '/booking/:coachId', element: <ProtectedRoute><Booking /></ProtectedRoute> },
  { path: '/my-bookings', element: <ProtectedRoute><MyBookings /></ProtectedRoute> },
  { path: '/settings', element: <ProtectedRoute><Settings /></ProtectedRoute> },

  {
    path: '/admin', element: <AdminRoute><Dashboard/></AdminRoute>,
    children: [
      { path: 'coaches', element: <CoachesMgnt/> },
      { path: 'bookings', element: <BookingsMgnt/> },
    ]
  },

  { path: '*', element: <NotFound /> }
])

export default function AppRouter(){
  return <RouterProvider router={router}/>
}
