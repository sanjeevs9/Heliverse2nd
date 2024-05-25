import  "../App.css"
import { useState } from "react";

export default function Navbar(){
  const[top,setTop]=useState(true);

  window.onscroll=()=>{
    if(window.scrollY==0){
      setTop(true);
    }else{
      setTop(false)
    }
   }
    
    return(
        <>
        <div className={` ${top?`bg-transparent`:`bg-white`} w-full h-28 flex justify-between pl-32 pr-32   items-center `}>
        <div>
          <img className='size-fit h-7 mt-1 ' src="https://trx-effects.ancorathemes.com/wp-content/uploads/2021/04/logo-2x.png"></img>
        </div>
        <div className='flex  gap-9 font-alata text-sm'>
            <div className=' hover:cursor-pointer relative text'>Dynamic Background</div>
            <div className=' hover:cursor-pointer text'>Image Effects</div>
            <div className=' hover:cursor-pointer text'>Background text</div>
            <div className=' hover:cursor-pointer text'>Image Mask</div>
            <div className=' hover:cursor-pointer text'>Mouse Helper</div>
            <div className=' hover:cursor-pointer text'>Background Slides</div>
            
        </div>
        <div>
          <button className='font-alata bg-white hover:bg-black hover:text-white border-[1px] rounded-3xl pl-12 pr-12
           pt-3 pb-3 text-center border-black text-sm' >
            Buy Now
          </button>
        </div>
    </div>
        </>
    )
}