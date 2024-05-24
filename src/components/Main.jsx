import { useEffect } from "react";
import "../App.css"
import gsap from "gsap";
import Tag from "./Tag";

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
                <div className="z-10 ">
                <h1 className="relative down inline-block text-transparent bg-clip-text bg-gradient-to-r from-dark to-light text-[400px] font-bold z-10" id="down">
                    P
                    <div className="absolute  rotate-[30deg] top-0 translate-y-56 -translate-x-10">
                    <Tag text={"Text"} from={"from-[#a566f1]"} to={"to-[#f2c4e8]"}></Tag>
                    </div>
                </h1>
                </div>
                <div className="z-20">
                <h1 className="relative up inline-block text-transparent bg-clip-text bg-gradient-to-r from-dark to-light text-[400px] font-bold z-20">
                    L
                    <div className="absolute  rotate-[-15deg] top-0 translate-y-80 -translate-x-10">
                    <Tag text={"Mouse"} from={"from-[#b4f5f4]"} to={"to-[#eac4e6]"}></Tag>
                    </div>
                </h1>
                </div>
                <div className="z-10">
                <h1 className="down inline-block text-transparent bg-clip-text  bg-gradient-to-r from-dark to-light text-[400px] font-bold z-10">
                    U
                </h1>
                </div>
                <div className="-translate-x-14 z-20">
                <h1 className="relative up inline-block text-transparent bg-clip-text bg-gradient-to-r from-dark to-light text-[400px] font-bold z-20 ">
                    G
                    <div className="absolute top-0 rotate-[30deg] translate-y-52 -translate-x-8">
                    <Tag text={"Dynamic"} from={"from-[#fdcfb0]"} to={"to-[#fe698e]"}></Tag>
                    </div>

                </h1>
                </div>
                <div className="z-10 -translate-x-5 ">
                <h1 className="relative down inline-block text-transparent bg-clip-text bg-gradient-to-r from-dark to-light text-[400px] font-bold z-10">
                    I
                    <div className="absolute bottom-0 rotate-[-25deg] -translate-y-36 -translate-x-16">
                    <Tag text={"Image"} from={"from-[#f5c9b5]"} to={"to-[#a86aee]"}></Tag>
                    </div>
                </h1>
                </div>
                <div className="z-20">
                <h1 className="relative up inline-block text-transparent bg-clip-text bg-gradient-to-r from-dark to-light text-[400px] font-bold z-20">
                    N
                    <div className="absolute rotate-[15deg] top-0 translate-x-36 translate-y-48">
                    <Tag text={"Background"} from={"from-[#b4f5f4]"} to={"to-[#ecc3e6]"}></Tag>
                    </div>
                </h1>
                </div>
            </div>
        </div>
        </>
    )
}