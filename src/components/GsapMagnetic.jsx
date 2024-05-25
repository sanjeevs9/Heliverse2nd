import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react"


export default function GsapMagnetic({children,xcordinate,ycordinate}){
    const ref = useRef(null);
    const xValueRef = useRef(0);
    const yValueRef = useRef(0);
    
    useEffect(()=>{
        async function getCordinates(){
            const rect = await ref.current.getBoundingClientRect();
            xValueRef.current = rect.x;
            yValueRef.current = rect.y;
            console.log(rect);
            
        }
        getCordinates();
    },[])


    useEffect(()=>{
        const mouseMove=(e)=>{
            
            const {clientX,clientY}=e;
            const {width,height,left,top}=ref.current.getBoundingClientRect();
            const x=clientX-(left+width/2)+xcordinate;
            const y=clientY-(top+height/2)+ycordinate;
           
            
            gsap.to(ref.current,{x:1.5*x,duration:0.3})
            gsap.to(ref.current,{y:1.5*y,duration:0.3});
        }
        const mouseLeave=()=>{
   
            gsap.to(ref.current,{x:`${xcordinate}px`,duration:0.3})
            gsap.to(ref.current,{y:`${ycordinate}px`,duration:0.3});
        }
        ref.current.addEventListener("mousemove",mouseMove);
        ref.current.addEventListener("mousemove",mouseLeave);
        return()=>{
            ref.current.removeEventListener("mousemove",mouseMove);
            ref.current.removeEventListener("mousemove",mouseLeave);
                
        }
    },[])

    return(
        React.cloneElement(children,{ref})
    )
    
}