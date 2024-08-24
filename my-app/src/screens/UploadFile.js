import React from 'react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import Upload from "../components/Upload"

export default function UserHome() {
  const email = localStorage.getItem('userEmail'); 
  return (
    <div>
        <Navbar />
        <Upload userMail={email}/>
        <Footer></Footer>
    </div>
  )
}
