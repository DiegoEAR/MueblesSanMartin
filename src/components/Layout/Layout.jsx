import React from 'react'
import { LayoutWrapper } from './LayoutStyles'
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const Layout = ({children}) => {
  return (
    <>
      <Navbar></Navbar>
      <LayoutWrapper>{children}</LayoutWrapper>
      <Footer></Footer>
    </>
  )
}

export default Layout