import { useContext } from "react";

import { AuthContext } from "../../Providers/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const UpdatePage = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const secureAxios = useAxios()
    const data = useLoaderData()
    const {
        foodName,
        foodImage,
        foodQuantity,
        pickupLocation,
        additionalInformation,
        expiredDate,
        _id
        } = data[0]

       
    const handelUpdateFood = (e) => {
        e.preventDefault()
        const form = e.target 
        const foodName = form.foodName.value 
        const foodImage = form.foodImage.value
        const foodQuantity = form.foodQuantity.value
        const pickupLocation = form.pickupLocation.value
        const additionalInformation = form.additionalInformation.value
        const expiredDate = form.expiredDate.value
        const foodStatus = form.foodStatus.value
        const donatorName = form.donatorName.value
        const donatorEmail = form.donatorEmail.value
        const donatorPhoto = form.donatorPhoto.value
        const food = {foodName , foodImage , foodQuantity , pickupLocation , additionalInformation , expiredDate , foodStatus, donatorEmail , donatorName , donatorPhoto }
       secureAxios.patch(`/foods/${_id}`, food)
       .then(res => {
        console.log(res.data)
        Swal.fire({
            icon: 'success',
            title: 'Great!',
            text: 'Your food has been updated',
           
             confirmButtonColor:"#63bea0",
             
           
          })
          navigate('/')
    })
    }
    return (
        <div>
      <Helmet>
      <title>Eat Together | Update Food</title>
    </Helmet>
              <div className="flex justify-center items-center h-full">
           
           <div className="relative">
               
                <div className="">
               <img className="opacity-70 lg:block hidden md:h-auto md:w-auto w-[100vw]  " src="https://static01.nyt.com/images/2018/03/22/style/22mealshare-1/00mealshare-1-superJumbo.jpg" alt="" />
               <div className="bg-black opacity-70 lg:absolute top-0 left-0 w-[100vw] h-full"></div>
           </div>
              <div className="hero min-h-screen lg:absolute w-[80vw] left-[10%] top-[13%] ">
               
     <div className="hero-content flex-col w-full lg:flex-row-reverse">
       
       <div className="card flex-shrink-0   w-[90vw] lg:max-w-4xl 2xl:max-w-6xl mx-auto shadow-2xl bg-base-100">
         <form onSubmit={handelUpdateFood} className="card-body">
           {/* start */}
           <div className=" md:grid gap-7 grid-cols-2">
               <div className="form-control">
             <label className="label">
               <span className="label-text md:text-lg text-base  2xl:text-2xl">Food Name</span>
             </label>
             <input type="text" defaultValue={foodName} name="foodName" placeholder="Food Name" className="input  md:text-lg text-base  2xl:text-2xl input-bordered" required />
           </div>
           <div className="form-control ">
             <label className="label">
               <span className="label-text md:text-lg text-base   2xl:text-2xl">Food Image</span>
             </label>
             <input type="text" defaultValue={foodImage} name="foodImage" placeholder="Food Image" className="input  md:text-lg text-base  2xl:text-2xl input-bordered" required />
            
           </div>
         </div>
           {/* start */}
           <div className=" lg:grid gap-7 grid-cols-2">
               <div className="form-control">
             <label className="label">
               <span className="label-text md:text-lg text-base   2xl:text-2xl ">Food Quantity</span>
             </label>
             <input type="text" defaultValue={foodQuantity} name="foodQuantity" placeholder="Food Quantity" className="input   md:text-lg text-base  2xl:text-2xl input-bordered" required />
           </div>
           <div className="form-control ">
             <label className="label">
               <span className="label-text md:text-lg text-base   2xl:text-2xl">Pickup Location</span>
             </label>
             <input type="text" defaultValue={pickupLocation} name="pickupLocation" placeholder="Pickup Location" className="input  md:text-lg text-base  2xl:text-2xl input-bordered" required />
            
           </div>
         </div>
           {/* start */}
           <div className=" md:grid gap-7 grid-cols-2">
               <div className="form-control">
             <label className="label">
               <span className="label-text md:text-lg text-base  2xl:text-2xl">Expired Date</span>
             </label>
             <input type="date" defaultValue={expiredDate} name="expiredDate" placeholder="Expired Date" className="input  md:text-lg text-base  2xl:text-2xl input-bordered" required />
           </div>
           <div className="form-control ">
             <label className="label">
               <span className="label-text md:text-lg text-base   2xl:text-2xl">Food Status</span>
             </label>
             <input type="text"  name="foodStatus" defaultValue={"Available"} placeholder="Food Status(available/Not Available)" className="input  md:text-lg text-base  2xl:text-2xl input-bordered" required />
            
           </div>
         </div>
         <div className="form-control ">
         <label className="label">
               <span className="label-text md:text-lg text-base   2xl:text-2xl">Additional Information</span>
             </label>
           <textarea defaultValue={additionalInformation} name="additionalInformation" id="" cols="30" placeholder="Additional Information" rows="10" className="input h-[20vh] px-[1%] pt-[1%]   md:text-lg text-base  2xl:text-2xl input-bordered" required ></textarea>
   
         </div>
           {/* start */}
           <div className=" md:grid gap-7 grid-cols-3">
               <div className="form-control">
             <label className="label">
               <span className="label-text md:text-lg text-base  2xl:text-2xl">Donator Name</span>
             </label>
             <input type="text" name="donatorName" defaultValue={user?.displayName} placeholder="Donator Name" className="input  md:text-lg text-base  2xl:text-2xl input-bordered" required />
           </div>
           <div className="form-control ">
             <label className="label">
               <span className="label-text md:text-lg text-base   2xl:text-2xl">Donator Image</span>
             </label>
             <input type="text" name="donatorPhoto" defaultValue={user?.photoURL} placeholder="Donator Image"  className="input  md:text-lg text-base  2xl:text-2xl input-bordered" required />
            
           </div>
           <div className="form-control ">
             <label className="label">
               <span className="label-text md:text-lg text-base   2xl:text-2xl">Donator Email</span>
             </label>
             <input type="email" name="donatorEmail" defaultValue={user?.email} placeholder="Donator Email" className="input  md:text-lg text-base  2xl:text-2xl input-bordered"  required />
            
           </div>
         </div>
         
       
           <div className="form-control mt-6">
             <button className="btn btn-primary text-base md:text-xl 2xl:text-2xl text-black capitalize bg-yellow-400 border-none hover:bg-yellow-600">Update Food</button>
           </div>
         </form>
       </div>
     </div>
   </div>
   </div>
   </div>
        </div>
    );
};

export default UpdatePage;