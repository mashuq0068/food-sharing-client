import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import OneFood from "../oneFood/OneFood";


const FeaturesFood = () => {
    const [position , setPosition] = useState("")
    const [top , setTop] = useState("")
    const [foods , setFoods] = useState([])
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
   const {error , loading , data} = useQuery({
     queryKey:['foods'],
     queryFn: async () => {
        const response = await defaultAxios.get('/foods')
        return response.data.sort((a,b) => b.foodQuantity - a.foodQuantity).slice(0,5)

     }
   })
   if (loading ){
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
       <div className="lg:mt-[55vh] grid grid-cols-3 gap-7">
       
        {data?.map(food => <OneFood key={food._id} food={food}></OneFood>)}
       </div>
   
        
        </div>
        </>
    );
};

export default FeaturesFood;