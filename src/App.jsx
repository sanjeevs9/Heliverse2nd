import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Navbar1 from './components/Navbar1';
import Banner from './components/Banner';
import Main from './components/Main';

function App() {
 const cookie=useRef();

 useEffect(()=>{

 },[])

  return (
    <>
    <Navbar1/>
    <div className='bg-[url("https://trx-effects.ancorathemes.com/wp-content/uploads/2021/04/bg.jpg")]' >
    
      <Navbar/>
      <Main/>
      <Banner/>
      </div>
      
     
    </>
  )
}

export default App
