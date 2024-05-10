import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import OneFoodRequest from "../oneFoodRequest/OneFoodRequest";


const FoodRequest = () => {
    const secureAxios = useAxios()
    const {user} = useContext(AuthContext)
    const {error , isPending , data} = useQuery({
        queryKey:['foods'],
        queryFn: async () => {
           const response = await secureAxios.get('/foodRequest')
           return response.data.filter(food => food.email === user?.email)
   
        },
       
      })
      if (isPending ){
       
        return( <span className="loading loading-spinner text-yellow-500 text-7xl w-[2%] absolute top-[40%] left-[50%]"></span>)
         
      }
      if(error){
       return(error.message)
   }
    return (
        <div>
            { data?.length === 0 ? <p className="text-3xl text-gray-500   text-center font-bold mt-[10vh]">You did not request for any food</p>:<div className=" grid xl:grid-cols-2 grid-cols-1 2xl:px-[3%] gap-[3%]">{data?.map(food => <OneFoodRequest key={food._id} food={food}></OneFoodRequest>)}</div>}
            
        </div>
    );
};

export default FoodRequest;