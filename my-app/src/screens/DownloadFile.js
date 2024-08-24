import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Download from '../components/Downloads';
import { useLocation } from 'react-router-dom';



export default function FileTypeDropdowns() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const display = searchParams.get("display");

  return (
    <div>
      <Navbar display={display}/>
      <Download></Download>
      <Footer></Footer>
    </div>
  );
}
