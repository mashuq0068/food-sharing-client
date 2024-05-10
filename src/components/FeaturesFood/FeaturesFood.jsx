import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import OneFood from "../oneFood/OneFood";
import { Link } from "react-router-dom";






const FeaturesFood = () => {
   
    
   
    const defaultAxios = useAxios()
  
   const {error , isPending , data} = useQuery({
     queryKey:['foods'],
     queryFn: async () => {
        const response = await defaultAxios.get('/foods')
        return response.data.sort((a,b) => b.foodQuantity - a.foodQuantity).slice(0,6)

     }
   })
   if (isPending ){
      return(
        <span className="loading loading-spinner text-yellow-500 text-7xl w-[2%] absolute top-[40%] left-[50%]"></span>
      )
   }
   if(error){
    return(error.message)
}

    return (
        <div className= " container-custom  mt-[15vh]">
        
        <div className={`h-auto  duration-1000 w-full    z-[10] `}>
        <h3 className=" lg:text-4xl mb-[5vh]   font-bold text-center  ">Features Food </h3>
       <div className=" grid md:grid-cols-2 grid-cols-1 gap-5  xl:grid-cols-3 ">
        
        
        {data?.map(food => <OneFood key={food._id} food={food}></OneFood>)}
       </div>
           <Link to='/availableFoods' className=" max-auto flex justify-center w-[100%]"><button className="btn hover:bg-yellow-600 drop-shadow-xl shadow-lg px-12 capitalize mt-[5vh]  py-2 w-max mx-auto bg-yellow-400 border-none ">Show All</button></Link>
    
       </div>
          
        </div>
       
    );
};

export default FeaturesFood;