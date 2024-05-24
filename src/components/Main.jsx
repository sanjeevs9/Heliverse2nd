import { useEffect } from "react";
import "../App.css"
import gsap from "gsap";

export default function Main(){
    let tDown = gsap.timeline({ repeat: -1 });
    let tUp = gsap.timeline({ repeat: -1 });

 
    useEffect(()=>{
        tDown.to(".down", { y: -40, ease: "shine.in",duration: 3})
        .to(".down",{y:0 ,ease:"none",duration:1})
        .to(".down", { y: 40, ease: "shine.out",duration: 3 })
        .to(".down",{y:0 ,ease:"none",duration:1})

    },[])

    useEffect(()=>{
        tUp.to(".up", { y: 40, ease: "shine.in",duration:3 })
        .to(".up", { y: 0, ease: "none",duration:1 })
        .to(".up", { y: -40, ease: "shine.out",duration:3 })
        .to(".up", { y: 0, ease: "none",duration:1 });  
    },[])
      

    return(
        <>
        <div className="flex items-center justify-center flex-col ">
            <div className="text-[#152035] flex text-7xl font-semibold z-1  translate-y-24">
            Visual Effects & Animation Kit
            </div>
            <div className="flex ">
                <div className="z-20">
                <h1 className="down inline-block text-transparent bg-clip-text bg-gradient-to-r from-dark to-light text-[400px] font-bold z-10" id="down">
                    P
                </h1>
                </div>
                <div className="z-10">
                <h1 className="up inline-block text-transparent bg-clip-text bg-gradient-to-r from-dark to-light text-[400px] font-bold z-20">
                    L
                </h1>
                </div>
                <h1 className="down inline-block text-transparent bg-clip-text  bg-gradient-to-r from-dark to-light text-[400px] font-bold z-10">
                    U
                </h1>
                <div className="-translate-x-14 z-20">
                <h1 className="up inline-block text-transparent bg-clip-text bg-gradient-to-r from-dark to-light text-[400px] font-bold z-20 ">
                    G
                </h1>
                </div>
                <div className="z-10 -translate-x-5">
                <h1 className="down inline-block text-transparent bg-clip-text bg-gradient-to-r from-dark to-light text-[400px] font-bold z-10">
                    I
                </h1>
                </div>
                <div className="z-20">
                <h1 className="up inline-block text-transparent bg-clip-text bg-gradient-to-r from-dark to-light text-[400px] font-bold z-20">
                    N
                </h1>
                </div>
            </div>
        </div>
        </>
    )
}