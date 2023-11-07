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
        <div className="mt-[10vh] w-[35vw]  mx-auto space-y-3  drop-shadow-xl shadow-lg shadow-black p-[3%] rounded-2xl">
            <h3 className="text-teal-500 font-bold text-4xl text-center  pb-[10%]"><span className="text-gray-600">Req</span>uestor</h3>
           <div className="profile-picture w-max mx-auto">
           <img className="rounded-profile" src={photo} alt="" />
           </div>
           <p className="lg:text-xl 2xl:text-2xl"><span className="font-bold text-gray-600 lg:text-xl 2xl:text-2xl">Requestor Email</span> : {email}</p>
           <p className="lg:text-xl 2xl:text-2xl"><span className="font-bold text-gray-600 lg:text-xl 2xl:text-2xl">Requestor Name</span> : {name}</p>
           <p className="lg:text-xl 2xl:text-2xl"><span className="font-bold text-gray-600 lg:text-xl 2xl:text-2xl">Request Date</span> : {requestDate}</p>
           <p className="lg:text-xl 2xl:text-2xl"><span className="font-bold text-gray-600 lg:text-xl 2xl:text-2xl">Request Time</span> : {requestTime}</p>
          
           <p className="lg:text-xl 2xl:text-2xl"><span className="font-bold text-gray-600 lg:text-xl 2xl:text-2xl">Food Status</span> : {status}</p>

          <div className="text-center">
          <button onClick={handleDelivered} className="btn capitalize mt-[5vh] drop-shadow-xl shadow-lg bg-teal-400 hover:bg-teal-500 lg:text-xl 2xl:text-2xl border-none">Make it Delivered</button>
          </div>
          
           

            
        </div>
    );
};

export default Manage;