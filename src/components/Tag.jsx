import { useEffect } from "react";
import { useState } from "react"

export default function Tag({text,from,via,to}){
    const[hover,sethover]=useState(false);

    useEffect(()=>{
        if(hover){
       
            document.getElementById("circle").classList.add("size")
        }else{
            document.getElementById("circle").classList.remove("size")
        }
    },[hover])

    return (
        <>
        <div onMouseEnter={()=>{sethover(true)}} onMouseLeave={()=>{sethover(false)}} className={`z-30 bg-gradient-to-r ${from} ${to} text-center pt-3 pb-3 rounded-full font-medium text-[1.7rem] w-56 text-black`}>
            {text}
            
        </div>
        </>
    )
}