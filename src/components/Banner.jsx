import "../App.css"

export default function Banner() {
    return (
        <>
        <div className="flex  relative font-semibold font-sans overflow-hidden">
            <div className="bg-black min-w-full h-[75px] flex justify-between items-center  animate-marquee   text-xl border-0 ">
                
                <div className="text-white pl-36">
                    EVERYTHING YOU SEE WILL BE INSIDE THE PRODUCT
                </div>
                <div className="bg-white h-5 w-[2px] place-self-center">

                </div>
                <div className="text-white">
                    EVERYTHING YOU SEE WILL BE INSIDE THE PRODUCT
                </div>
                <div className="bg-white h-5 w-[2px] place-self-center mr-2">

                </div>
               
                
            </div>
            <div className=" bg-black min-w-full h-[75px] flex justify-between items-center  animate-marquee text-xl  border-0 -ml-1" aria-hidden="true" >
                
                <div className="text-white pl-36">
                    EVERYTHING YOU SEE WILL BE INSIDE THE PRODUCT
                </div>
                <div className="bg-white h-5 w-[2px] place-self-center">

                </div>
                <div className="text-white">
                    EVERYTHING YOU SEE WILL BE INSIDE THE PRODUCT
                </div>
                <div className="bg-white h-5 w-[2px] place-self-center mr-2">

                </div>
                
            </div>
            
            </div>

        </>
    )
}