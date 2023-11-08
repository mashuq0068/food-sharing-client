import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import OneFood from "../oneFood/OneFood";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import FaqPage from "../../Pages/FaqPage/FaqPage";

import OurGoal from "../OurGoal/OurGoal";





const FeaturesFood = () => {
    const [position , setPosition] = useState("")
    const [top , setTop] = useState("")
   
    const [animated, setAnimated] = useState(false);
    
   
    const defaultAxios = useAxios()
    const scrollY = window.scrollY;
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
        // return () => {
        //     window.removeEventListener ("scroll" , handelScroll)
        // }
    },[])
   const {error , isPending , data} = useQuery({
     queryKey:['foods'],
     queryFn: async () => {
        const response = await defaultAxios.get('/foods')
        return response.data.sort((a,b) => b.foodQuantity - a.foodQuantity).slice(0,6)

     }
   })
   if (isPending ){
      return(
        <span className="loading loading-spinner text-teal-500 text-7xl w-[2%] absolute top-[40%] left-[50%]"></span>
      )
   }
   if(error){
    return(error.message)
}

    return (
        <div>
        
        <div className={`${position}  ${top}  bg-teal-400 h-auto  duration-1000 w-full  lg:w-[100vw] top-[100vh] z-[10] `}>
        <h3 className="text-xl lg:text-4xl font-bold text-center lg:pt-0 pt-[10vh] lg:pb-0 pb-[10vh] lg:relative top-[47vh]">Features Food </h3>
       <div className="lg:mt-[55vh] grid md:grid-cols-2 grid-cols-1 xl:grid-cols-3 gap-7 px-[6%]">
        
        
        {data?.map(food => <OneFood key={food._id} food={food}></OneFood>)}
       </div>
           <Link to='/availableFoods' className="w-max max-auto relative top-[5vh] md:top-[10vh] left-[30vw] md:left-[43vw]"><button className="btn hover:bg-white drop-shadow-xl shadow-lg px-12 capitalize 2xl:text-2xl py-2 w-max mx-auto bg-white border-none ">Show All</button></Link>
       <div className="mt-[40vh] drop-shadow-xl shadow-xl shadow-black " >
      <div className="bg-white">
      <OurGoal></OurGoal>
      <FaqPage></FaqPage>
      <Footer></Footer>
    
     </div>
     <div className="bg-white">
     {/* <OurGoal></OurGoal>
      <FaqPage></FaqPage>
      <Footer></Footer> */}
</div>
     
      </div>
       </div>
          
        </div>
       
    );
};

export default FeaturesFood;