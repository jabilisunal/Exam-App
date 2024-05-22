import React from 'react'
import { Outlet } from 'react-router'
import Header from "../../Layout/site/Header/Header"
import Footer from "../../Layout/site/Footer/Footer"

const SiteRoot = () => {
  return (
    <div>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default SiteRoot