import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import OneFood from "../oneFood/OneFood";
import { Link } from "react-router-dom";


const FeaturesFood = () => {
    const [position , setPosition] = useState("")
    const [top , setTop] = useState("")

    const defaultAxios = useAxios()
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
        <>
        
        <div className={` h-auto pb-[10%] duration-1000 w-full  lg:w-[100vw] top-[100vh] z-[10] ${position} ${top}`}>
        <h3 className="text-xl lg:text-4xl font-bold text-center lg:pt-0 pt-[10vh] lg:pb-0 pb-[10vh] lg:relative top-[47vh]">Features Food </h3>
       <div className="lg:mt-[55vh] grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-7 px-[6%]">
        
        
        {data?.map(food => <OneFood key={food._id} food={food}></OneFood>)}
       </div>
           <Link to='/availableFoods' className="w-max max-auto relative top-[5vh] md:top-[10vh] left-[30vw] md:left-[40vw]"><button className="btn hover:bg-white drop-shadow-xl shadow-lg px-12 capitalize 2xl:text-2xl py-2 w-max mx-auto bg-white border-none ">Show All</button></Link>
        
        </div>
        </>
    );
};

export default FeaturesFood;