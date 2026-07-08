import React from 'react'
import MainNavbar from '../navbar/Mainnavbar'
import Footer from '../common/Footer'
import { Outlet } from 'react-router-dom'
const AuthLayout = () => {
  return (
    <div>
        
        <MainNavbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AuthLayout