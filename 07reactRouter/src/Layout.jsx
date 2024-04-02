import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <>
    <Header />
    <Outlet /> 
    {/* outlet marks as element which will be changed */}
    <Footer />
    </>
  )
}

export default Layout