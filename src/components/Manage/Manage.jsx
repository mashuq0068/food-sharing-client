import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
import { useState } from "react";


const Manage = ({food}) => {
    const secureAxios = useAxios()
    
    const {name , email , photo , requestDate , requestTime , foodStatus , foodId , _id} = food
    const [status , setStatus] = useState(foodStatus)
    const handleDelivered = async () =>{
      await secureAxios.delete(`/foods/${foodId}`)
        .then(res => {
            console.log(res.data)
           
        })
      await secureAxios.put(`/foodRequest/${_id}`)
        .then(res => {
            console.log(res.data)
            Swal.fire({
                icon: 'success',
                title: 'Great!',
                text: 'Thanks to share your food',
               
                 confirmButtonColor:"#63bea0",
                 
               
              })
              setStatus("Delivered")
        })
       

    }
    
    return (
        <div className="mt-[10vh] lg:w-[35vw] md:w-[70vw] w-[90vw] mx-auto space-y-3  drop-shadow-xl shadow-lg shadow-black   p-[3%] rounded-2xl">
            <h3 className="text-yellow-500 font-bold text-4xl text-center  pb-[10%]"><span className="text-gray-600">Req</span>uestor</h3>
           <div className="profile-picture w-max mx-auto">
           <img className="rounded-profile" src={photo} alt="" />
           </div>
           <p className="lg: "><span className="font-bold text-gray-600 lg: ">Requester Email</span> : {email}</p>
           <p className="lg: "><span className="font-bold text-gray-600 lg: ">Requester Name</span> : {name}</p>
           <p className="lg: "><span className="font-bold text-gray-600 lg: ">Request Date</span> : {requestDate}</p>
           <p className="lg: "><span className="font-bold text-gray-600 lg: ">Request Time</span> : {requestTime}</p>
          
           <p className="lg: "><span className="font-bold text-gray-600 lg: ">Food Status</span> : {status}</p>

          <div className="text-center">
          <button onClick={handleDelivered} className="btn capitalize mt-[5vh] drop-shadow-xl shadow-lg bg-yellow-400 hover:bg-yellow-500 lg:  border-none">Make it Delivered</button>
          </div>
          
           

            
        </div>
    );
};

export default Manage;