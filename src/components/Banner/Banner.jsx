

import { useEffect, useState } from 'react';

const Banner = () => {
    // const scrollDiv = document.getElementById("scroll")
    // const spacing = document.getElementById("spacing")
    const [height , setHeight] = useState(false)
    const[spacing , setSpacing] = useState(false)
   
    
    useEffect(()=>{
        const handelScroll = () => {
           if(window.scrollY > 100){
            setHeight(true)
           setSpacing(true)
         
         
            
           
         
           }
           if(window.scrollY < 100){
           
            setHeight(false)
            setSpacing(false)
         
          
            
           }

        }
        window.addEventListener("scroll" , handelScroll)
        return () => {
            window.removeEventListener ("scroll" , handelScroll)
        }
    },[])

    return (
        <div className="relative">
        <div className="">
            <img className="opacity-70 md:h-auto md:w-auto w-[100vw]  h-[120vh]" src="https://static01.nyt.com/images/2018/03/22/style/22mealshare-1/00mealshare-1-superJumbo.jpg" alt="" />
            <div className="bg-black opacity-70 absolute top-0 left-0 w-[100vw] h-full"></div>
        </div>
        <div className="absolute  top-[33%] lg:top-[25%] w-full">
           
            <p  className={`font-bold  duration-1000  md:text-3xl text-2xl lg:text-4xl 2xl:text-5xl text-center slide-from-left drop-shadow-xl shadow-teal-400 relative  z-10 text-white `}>Save Food <span className={`text-teal-400  duration-1000 slide-from-left md:text-3xl text-2xl lg:text-4xl 2xl:text-5xl `}>Save life</span></p> 
           
        </div>
       
        <div id="scroll" className={`text-5xl lg:w-[33vw] ${height ? "lg:h-[35vh] h-auto" : "lg:h-[0vh]"} h-[0vh] overflow-hidden left-[10%] md:left-[25%] lg:left-[33%] duration-1000 top-[42%]   lg:top-[33%] absolute  text-teal-400 text-center`}>
           
          <img className=' lg:w-[33vw] w-[80vw] md:w-[50vw]' src="https://i0.wp.com/codemyui.com/wp-content/uploads/2016/10/pure-css-site-scroll-micro-animation.gif" alt="" /> 
        </div>
    </div>
    
    );
};

export default Banner;