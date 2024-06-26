import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";


const OneFoodRequest = ({food}) => {
    const {foodImage , donatorName , pickupLocation , expiredDate , requestDate , donationMoney , foodStatus , _id} = food
    const secureAxios = useAxios()
    const [hidden , setHidden] = useState(false)
    const handleCancelRequest = () => {
        if(foodStatus.toLowerCase() === "available"){
            return(
                
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You want to cancel the request!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, cancel it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                        secureAxios.delete(`/foodRequest/${_id}`)
                        .then(res => {
                            console.log(res.data)
        
                         setHidden("hidden")
                        if (res.data.deletedCount > 0) {
                          Swal.fire(
                              'Canceled!',
                              'Your request has been canceled.',
                              'success'
                            )
                            
                            
                      }
                
                      })
                       
                           
                      
                    }
                  })
                    
            )
        }
        else{
            toast.error("The food has been already delivered. So, no need for cancel it.")
        }
    }
    return (
        <>
       <Toaster position="center-top" toastOptions={{className:" text-center"}}></Toaster>
        <div className={` ${hidden ? "hidden" : ""}  flex lg:flex-row flex-col  justify-between drop-shadow-xl  shadow-lg d-200 space-y-3  lg: text-base w-[100%]  p-[2%] rounded-2xl mx-auto mt-[5vh]`}>
            <img  className="h-auto w-[100%] lg:w-[40%]" src={foodImage} alt="" />
           <div className=" space-y-3">
           <p className="lg: "><span className="font-bold text-gray-600 lg: ">Donator Name</span>: {donatorName}</p>
            <p className="lg: "><span className="font-bold text-gray-600 lg: ">Pickup Location</span>: {pickupLocation}</p>
            <p className="lg: "><span className="font-bold text-gray-600 lg: ">Expired Data</span> : {expiredDate}</p>
            <p className="lg: "><span className="font-bold text-gray-600 lg: ">Request Date </span> : {requestDate}</p>
            <p className="lg: "><span className="font-bold text-gray-600 lg: ">Donation Amount</span> : {donationMoney}</p>
            <p className="lg: "><span className="font-bold text-gray-600 lg: ">Food Status</span> : {foodStatus}</p>
            
           </div>
           <div>
           <button onClick={handleCancelRequest} className="md:w-px-4  md:py-3 md:rounded-lg drop-shadow-xl 2xl:  border-none bg-red-500 hover:bg-red-600 px-3 py-1 rounded-sm text-white">Cancel Request</button>
            </div>
        </div>
        
       </>
           
       
    );
};

export default OneFoodRequest;