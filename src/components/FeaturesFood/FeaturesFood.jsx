import { useEffect, useState } from "react";


const FeaturesFood = () => {
    const [position , setPosition] = useState("")
    const [top , setTop] = useState("")
    useEffect(()=>{
        const handelScroll = () => {
            if(window.scrollY > 300){
                setPosition("absolute")
                setTop("top-[30vh] bg-teal-400")
            }
          
          
            if(window.scrollY < 100){
                setPosition("absolute")
                setTop("top-[120vh]")
            }

        }
        window.addEventListener("scroll" , handelScroll)
        return () => {
            window.removeEventListener ("scroll" , handelScroll)
        }
    },[])

    return (
        <>
        
        <div className={` h-[140vh] duration-1000  w-[100vw] top-[100vh] z-[10] ${position} ${top}`}>
            
        </div>
        <div className="h-[130vh] w-[100vh] ">

        </div>
        </>
    );
};

export default FeaturesFood;