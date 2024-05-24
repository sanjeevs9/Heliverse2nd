
export default function Tag({text,from,via,to}){
    return (
        <>
        <div className={` z-30 bg-gradient-to-r ${from} ${to} z-20 text-center pt-3 pb-3 rounded-full font-medium text-[1.7rem] w-60 text-black`}>
            {text}
            
        </div>
        </>
    )
}