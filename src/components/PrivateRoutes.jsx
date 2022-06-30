import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {

  const auth = localStorage.getItem('auth');

  return (
    auth === 'isAuthenticated' ? <Outlet /> : <Navigate to="/" exact />
  )
}

export default PrivateRoutes