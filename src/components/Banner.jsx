import "../App.css"

export default function Banner() {
    return (
        <>
        <div className="flex  relative font-semibold font-sans">
            <div className="bg-black min-w-full h-24 flex justify-between items-center  animate-marquee whitespace-nowrap  text-xl border-0">
                
                <div className="text-white">
                    EVERYTHING YOU SEE WILL BE INSIDE THE PRODUCT
                </div>
                <div className="bg-white h-5 w-[2px] place-self-center">

                </div>
                <div className="text-white">
                    EVERYTHING YOU SEE WILL BE INSIDE THE PRODUCT
                </div>
                <div className="bg-white h-5 w-[2px] place-self-center">

                </div>
                <div className="text-white">
                    EVERYTHING YOU SEE WILL BE INSIDE THE PRODUCT
                </div>
                <div className="bg-white h-5 w-[2px] place-self-center mr-1">

                </div>
            </div>
            <div className="absolute top-0 bg-black min-w-full h-24 flex justify-between items-center  animate-marquee2 text-xl whitespace-nowrap border-0" >
                
                <div className="text-white pl-32">
                    EVERYTHING YOU SEE WILL BE INSIDE THE PRODUCT
                </div>
                <div className="bg-white h-5 w-[2px] place-self-center">

                </div>
                <div className="text-white">
                    EVERYTHING YOU SEE WILL BE INSIDE THE PRODUCT
                </div>
                <div className="bg-white h-5 w-[2px] place-self-center">

                </div>
                <div className="text-white">
                    EVERYTHING YOU SEE WILL BE INSIDE THE PRODUCT
                </div>
            </div>
            </div>

        </>
    )
}