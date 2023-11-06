import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import OneFood from "../oneFood/OneFood";


const AvailableFood = () => {
    const defaultAxios = useAxios()
    const {error , loading , data} = useQuery({
        queryKey:['foods'],
        queryFn: async () => {
           const response = await defaultAxios.get('/foods')
           return response.data
   
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
      return(
       <div className="grid lg:grid-cols-3 p-[6%] md:grid-cols-2 grid-cols-1 gap-7 ">
       {  data?.map(food => <OneFood key={food._id} food={food}></OneFood>)}
       </div>
      )
 
};

export default AvailableFood;