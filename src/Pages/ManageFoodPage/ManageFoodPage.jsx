


import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import ManageFood from "../../components/ManageFood/ManageFood";


const ManageFoodPage = () => {
    const defaultAxios = useAxios()
    const {user} = useContext(AuthContext)
    const {error , isPending , data} = useQuery({
        queryKey:['foods'],
        queryFn: async () => {
           const response = await defaultAxios.get('/foods')
           return response.data.filter(food => food.donatorEmail === user?.email)
   
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
        <div className=" text-6xl">
            {data?.map(manageFood => <ManageFood key={manageFood._id} manageFood={manageFood}></ManageFood>)}
        </div>
    );
};

export default ManageFoodPage;