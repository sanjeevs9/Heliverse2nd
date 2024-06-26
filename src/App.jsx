import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Navbar1 from './components/Navbar1';
import Banner from './components/Banner';
import Main from './components/Main';
import gsap from 'gsap';
import ScrollCircle from './components/Scroll';
import { AnimatedCursor } from './components/AnimatedCursor';

function App() {
  let tl=gsap.timeline();
  
  // useEffect(()=>{

  //   function move(e){
  //     document.getElementById("circle")
  //     tl.to("#circle",{x:e.clientX,duration:0})
  //     .to("#circle",{y:e.clientY,duration:0})
  //   }

  //   window.addEventListener("mousemove",move);

  //   return()=>{
  //     window.removeEventListener("mousemove",move);
  //   }
  // },[])

 

  return (
    <>
     <AnimatedCursor/>
    <Navbar1/>
   
    
    <div className='bg-[url("https://trx-effects.ancorathemes.com/wp-content/uploads/2021/04/bg.jpg")]' >
     
    <Navbar/>
    
      <Main/>
      <Banner/>
      
      </div>
      <ScrollCircle/>

     
    </>
  )
}

export default App
