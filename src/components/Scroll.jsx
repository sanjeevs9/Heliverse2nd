import { motion, useScroll, useTransform, useViewportScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';

const ScrollCircle = () => {
    const ref = useRef()
    const ref1 = useRef();
    const { scrollYProgress: scrollY } = useScroll({ target: ref, offset: ["start center", "end end"] });
    const { scrollYProgress: scrolly2 } = useScroll({ target: ref1, offset: ["start center", "start"] });

    const scale = useTransform(scrollY, [0, 1], [1, 60]);
    const opacity = useTransform(scrollY, [0.9, 1], [10, 0]);


    const opacity2 = useTransform(scrollY, [0.9, 1], [0, 2]);


    const scale2 = useTransform(scrolly2, [0, 1], [40, 1]);


    return (
        <>
            <div className='-z-1' ref={ref} style={{ height: '200vh', display: 'flex', justifyContent: 'center', alignItems: 'start', paddingTop: "120px" }}>

                <motion.div
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: '50%',
                        backgroundColor: 'black',
                        scale,
                        zIndex: -10,
                        opacity,
                        position: "absolute"

                    }} />
                {/* <div className='-z-10' style={{ top: "-48%", position: "relative", display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', zIndex: 100, color: "white" }}>
                    <div className=''>
                        <div className='pl-[100px] pt-32'>
                            <svg fill="#ffffff" height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 476.213 476.213" xml:space="preserve" stroke="#ffffff">

                                <g id="SVGRepo_bgCarrier" stroke-whiteidth="0" />

                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                <g id="SVGRepo_iconCarrier"> <polygon points="287.5,384.394 253.107,418.787 253.107,0 223.107,0 223.107,418.787 188.713,384.394 167.5,405.606 238.107,476.213 308.713,405.606 " /> </g>

                            </svg>
                        </div>

                        <div className='pt-20 font-bold text-2xl'>
                            Dynamic Background
                        </div>
                    </div>
                </div> */}



            </div>
            <div className='-z-1' ref={ref1} style={{ height: '200vh', display: 'flex', justifyContent: 'center', alignItems: 'start' }}>
                <motion.div
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: '50%',
                        backgroundColor: 'black',
                        scale: scale2,
                        zIndex: -10,
                        opacity: opacity2

                    }}

                />
            </div>
        </>
    );
};

export default ScrollCircle;