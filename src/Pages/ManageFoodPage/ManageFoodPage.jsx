


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
           return response.data.filter(food => food?.donatorEmail === user?.email)
   
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
       
        data?.length === 0 ? <p className="text-3xl text-gray-500 text-center font-bold mt-[10vh]">No available foods you added </p> :<div className="2xl:ml-[10vw] w-max mt-[5vw] 2xl:mr-[10vw]">
        <table className="table">
        
           <thead className="2xl:text-2xl font-bold  text-gray-600 lg:text-xl text-base">
           <tr className="grid grid-cols-4  border  ">
           <td className="">Food Name</td>
            <td className="">Expired Date</td>
            <td className=" ">Food Id</td>
            <td className="">Actions</td>
           </tr>
           </thead>
           </table>
     
          {data?.map(manageFood => <ManageFood key={manageFood._id} manageFood={manageFood}></ManageFood>)}
          </div>
        
       
    );
}

export default ManageFoodPage;
