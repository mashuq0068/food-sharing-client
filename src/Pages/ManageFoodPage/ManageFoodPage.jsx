


import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";

import { AuthContext } from "../../Providers/AuthProvider";
import ManageFood from "../../components/ManageFood/ManageFood";
import { useContext } from "react";
import { Helmet } from "react-helmet";



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
           <span className="loading loading-spinner text-yellow-500 text-7xl w-[2%] absolute top-[40%] left-[50%]"></span>
         )
      }
      if(error){
       return(error.message)
   }
    return (
      <>
      <Helmet>
      <title>Eat Together | Manage My Foods</title>
    </Helmet>
       { data?.length === 0 ? <p className="text-3xl text-gray-500 text-center font-bold mt-[10vh]">No available foods you added </p> :<div className="2xl:ml-[10vw] w-max mt-[5vw] 2xl:mr-[10vw]">
        <table className="table lg:w-auto w-[100vw]">
        
           <thead className="2xl:text-2xl font-bold  text-gray-600 lg:text-xl text-base">
           <tr className="grid lg:grid-cols-4 grid-cols-2  drop-shadow-xl shadow-xl  border  ">
           <td className="">Food Name</td>
            <td className=" lg:block hidden ">Expired Date</td>
            <td className=" lg:block hidden">Food Id</td>
            <td className="">Actions</td>
           </tr>
           </thead>
           </table>
     
          {data?.map(manageFood => <ManageFood key={manageFood._id} manageFood={manageFood}>

          </ManageFood>)}
    
          </div>}
        </>
       
    );
}

export default ManageFoodPage;
