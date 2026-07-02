import Footer from '@/Pages/Share/Footer/Footer'
import Navbar from '@/Pages/Share/Navbar/Navbar'
import React from 'react'
import { Outlet } from 'react-router'


const RootsLayout = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default RootsLayout