import { useEffect, useState } from 'react';

export const AnimatedCursor = () => {
    const [cursorX, setCursorX] = useState(-100);
    const [cursorY, setCursorY] = useState(-100);
  
    useEffect(() => {
      const moveCursor = (e) => {
        setCursorX(e.clientX - 7);
        setCursorY(e.clientY - 7);
      };
      console.log({cursorX,cursorY})
  
      window.addEventListener('mousemove', moveCursor);
      return () => {
        window.removeEventListener('mousemove', moveCursor);
      };
    }, [cursorX,cursorY]);
  
    return (
        <>
        <div className='h-[14px] w-[14px] z-[10000] rounded-full mix-blend-difference absolute bg-white'  style={{
        transform: `translate(${cursorX}px, ${cursorY}px)`
      }}>

        </div>
        </>
    )
  };