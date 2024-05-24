import  "../App.css"

export default function Navbar(){
    return(
        <>
        <div className=' w-full h-28 flex justify-between pl-32 pr-32   items-center '>
        <div>
          <img className='size-fit h-8 mt-1 ' src="https://trx-effects.ancorathemes.com/wp-content/uploads/2021/04/logo-2x.png"></img>
        </div>
        <div className='flex  gap-10 '>
            <div className='font-semibold hover:cursor-pointer relative text'>Dynamic Background</div>
            <div className='font-semibold hover:cursor-pointer text'>Image Effects</div>
            <div className='font-semibold hover:cursor-pointer text'>Background text</div>
            <div className='font-semibold hover:cursor-pointer text'>Image Mask</div>
            <div className='font-semibold hover:cursor-pointer text'>Mouse Helper</div>
            <div className='font-semibold hover:cursor-pointer text'>Background Slides</div>
            
        </div>
        <div>
          <button className='bg-white hover:bg-black hover:text-white border-[1px] rounded-3xl pl-12 pr-12
           pt-3 pb-3 text-center border-black font-mono' >
            Buy Now
          </button>
        </div>
    </div>
        </>
    )
}