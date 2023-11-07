


import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";

import { AuthContext } from "../../Providers/AuthProvider";
import ManageFood from "../../components/ManageFood/ManageFood";
import { useContext } from "react";



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
       
        <div className="lg:ml-[10vw] mt-[5vw] lg:mr-[10vw]">
        <table className="table">
        
           <thead className="2xl:text-2xl font-bold  text-gray-600 lg:text-xl text-base">
           <tr className="flex relative border  ">
           <td className="">Food Name</td>
            <td className="ml-[1vw] border  mr-[10vw]">Expired Date</td>
            <td className="border  ">Food Id</td>
            <td className="border  ml-[20vw]">Actions</td>
           </tr>
           </thead>
           </table>
     
          {data?.map(manageFood => <ManageFood key={manageFood._id} manageFood={manageFood}></ManageFood>)}
          </div>
        
       
    );
}

export default ManageFoodPage;
