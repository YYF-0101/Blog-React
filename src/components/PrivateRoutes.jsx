import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {

  let auth = { 'token': false }


  return (
    auth.token ? <Outlet /> : <Navigate to="/" exact />
  )
}

export default PrivateRoutes