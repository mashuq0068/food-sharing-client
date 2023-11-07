import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Manage from "../../components/Manage/Manage";


const ManagePage = () => {
    const params = useParams()
    const secureAxios = useAxios()
    console.log(params.id)
    const {error , isPending , data} = useQuery({
        queryKey:['foods'],
        queryFn: async () => {
           const response = await secureAxios.get('/foodRequest')
           return response.data.filter(food => food.foodId === params.id)
   
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
            {data.length === 0 ? <p className="text-3xl text-gray-500 text-center font-bold mt-[10vh]">No request came for your food</p>:<div>{data?.map(food => <Manage key={food._id} food={food}></Manage>)}</div>}
        </div>
    );
};

export default ManagePage;