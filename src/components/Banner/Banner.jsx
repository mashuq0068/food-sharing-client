

import { useEffect } from 'react';
import {CgScrollV } from 'react-icons/cg';
const Banner = () => {
    const scrollDiv = document.getElementById("scroll")
    
    useEffect(()=>{
        const handelScroll = () => {
           if(window.scrollY > 100){
            scrollDiv.classList.remove("text-transparent")
         
           }
           if(window.scrollY < 100){
            scrollDiv.classList.add("text-transparent")
            
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
            <img className="opacity-70 md:h-auto md:w-auto  h-[120vh]" src="https://static01.nyt.com/images/2018/03/22/style/22mealshare-1/00mealshare-1-superJumbo.jpg" alt="" />
            <div className="bg-black opacity-70 absolute top-0 left-0 w-[100vw] h-full"></div>
        </div>
        <div className="absolute  top-[25%] w-full">
           
            <p id="spacing" className="font-bold  duration-1000  md:text-3xl text-2xl lg:text-4xl 2xl:text-5xl text-center drop-shadow-xl shadow-teal-400 relative  z-10 text-white slide-from-left">Save Food <span className="text-teal-400 duration-1000 slide-from-left ">Save life</span></p>
           
        </div>
       
        <div id="scroll" className="text-5xl left-[47%] duration-1000 text-transparent  top-[40%] absolute  text-teal-400 text-center">
           <p className=' mt-5'> Scroll</p>
          <div className='text-center mt-5 left-[34%] absolute'>
          <CgScrollV></CgScrollV>
          </div>
        </div>
    </div>
    
    );
};

export default Banner;