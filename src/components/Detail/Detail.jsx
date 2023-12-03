import { useContext, useState } from "react"
import { AuthContext } from "../../Providers/AuthProvider"
import moment from "moment/moment"
import useAxios from "../../hooks/useAxios"
import Swal from "sweetalert2"



const Detail = ({oneDetail}) => {
    const {foodName , foodImage , foodQuantity , expiredDate, donatorName , donatorEmail , pickupLocation , additionalInformation , _id} = oneDetail
    console.log(foodName)
   const [request , setRequest] = useState(false)
  
    const axiosSecure = useAxios()
    const {user} = useContext(AuthContext)
  
    
    const handleRequest = (e) => {
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
        const foodId = form.foodId.value
        const requestDate = form.requestDate.value
        const requestTime = form.requestTime.value
        const email = form.email.value
        const name = form.name.value
        const photo = form.photo.value
        const donationMoney = form.donationMoney.value
        
        const food = {foodName , foodImage , foodQuantity , pickupLocation , additionalInformation , expiredDate , foodStatus, donatorEmail , donatorName , foodId, requestDate , email , donationMoney , requestTime , name , photo}
        axiosSecure.post('/foodRequest' , food)
        .then(res => {
            setRequest("")
            const reqButton = document.getElementById("request-button")
            
            if (reqButton) {
                reqButton.setAttribute("disabled", "");
              }
            
            console.log(res.data)
           
            
            Swal.fire({
                icon: 'success',
                title: 'Enjoy!',
                text: 'Your request is successfully sent',
               
                 confirmButtonColor:"#63bea0",
                 
                 
                 
                 
               
              })
              setRequest(true)
            //   .then((result) => {
            //     if (result.isConfirmed) {
            //       Swal.fire({
            //         title: "Deleted!",
            //         text: "Your file has been deleted.",
            //         icon: "success"
            //       });
            //     }
            
        })

    }
    return (
        <>
        <div className="w-max mx-auto">
           <div className="mt-[5vh] w-max mx-auto  md:text-xl 2xl:text-2xl mb-[10vh] ">
             <h3 className="lg:text-4xl text-center text-2xl mb-[5vh] font-bold">Donar <span className=" text-yellow-500">Information</span></h3>
             <p className="mb-[3vh] text-gray-600"><span className="font-black text-black">Donar name</span> :   {donatorName}</p>
             <p className="mb-[3vh] font-thin text-gray-600"><span className="font-black text-black">Pickup Location</span> :   {pickupLocation}</p>

           </div>
           {/* food */}
           <div>
            <h3 className="lg:text-4xl text-center text-2xl mb-[5vh] font-bold"><span className="text-yellow-500">Food</span> Details</h3>
            {/* start */}
            <div className="drop-shadow-xl shadow-xl rounded-md lg:rounded-2xl space-y-5 md:text-xl 2xl:text-2xl mb-[10vh] p-[5%] pb-[7%]">
               <img className=" w-[80vw] lg:w-[40vw]" src={foodImage} alt="" />
               <p className="text-gray-600"><span className="text-black font-black">Food Name</span> : {foodName}</p>
               <p className="text-gray-600"><span className="text-black font-black">Food Quantity</span> : {foodQuantity}</p>
               <p className="text-gray-600"><span className="text-black font-black">Expired Date</span> : {expiredDate}</p>
               <div className=" text-end pt-[5%]">
               <button onClick={()=>document.getElementById('my_modal_4').showModal()} className="btn flex-1 hover:bg-yellow-500 px-6 capitalize 2xl:text-2xl py-2 w-max mx-auto bg-yellow-400 ">Request</button>
               </div>
            </div>

           </div>
        </div>
        {/* <div className=" drop-shadow-xl shadow-xl rounded-2xl bg-white z-10 w-[40vw] left-[30%]   h-[40vh] absolute top-[50%]">

        </div> */}
        <dialog id="my_modal_4"className="modal w-11/12  overflow-x-visible -z-10 modal-bottom sm:modal-middle">
  <div className="modal-box  w-11/12     max-w-5xl  2xl:text-2xl md:text-xl text-base">
    {/* start */}
    <form onSubmit={handleRequest} className=" w-11/12  ">
        {/* start */}
        <div className="  gap-7 w-[60vw grid-cols-2">
            <div className="form-control">
          <label className="label">
            <span className="label-text md:text-lg text-base  2xl:text-2xl">Food Name</span>
          </label>
          <input type="text" name="foodName" defaultValue={foodName} disabled placeholder="Food Name" className="input border-3  md:text-lg text-base  2xl:text-2xl border  outline outline-gray-200" required />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text md:text-lg text-base   2xl:text-2xl">Food Image</span>
          </label>
          <input type="text" name="foodImage" value={foodImage} disabled placeholder="Food Image" className="input border-3  md:text-lg text-base  2xl:text-2xl border  outline outline-gray-200" required />
         
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text md:text-lg text-base   2xl:text-2xl">Food Id</span>
          </label>
          <input type="text" name="foodId" value={_id} disabled placeholder="Food Image" className="input border-3  md:text-lg text-base  2xl:text-2xl border  outline outline-gray-200" required />
         
        </div>
      </div>
        {/* start */}
        <div className="  gap-7 grid-cols-2">
            <div className="form-control">
          <label className="label">
            <span className="label-text md:text-lg text-base   2xl:text-2xl ">Food Quantity</span>
          </label>
          <input type="text" name="foodQuantity" value={foodQuantity} disabled placeholder="Food Quantity" className="input border-3  md:text-lg text-base  2xl:text-2xl border  outline outline-gray-200" required />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text md:text-lg text-base   2xl:text-2xl">Pickup Location</span>
          </label>
          <input type="text" name="pickupLocation" value={pickupLocation} disabled placeholder="Pickup Location" className="input border-3  md:text-lg text-base  2xl:text-2xl border  outline outline-gray-200" required />
         
        </div>
      </div>
        {/* start */}
        <div className="  gap-7 grid-cols-2">
            <div className="form-control">
          <label className="label">
            <span className="label-text md:text-lg text-base  2xl:text-2xl">Expired Date</span>
          </label>
          <input type="date" value={expiredDate} name="expiredDate" placeholder="Expired Date" disabled className="input border-3  md:text-lg text-base  2xl:text-2xl border  outline outline-gray-200" required />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text md:text-lg text-base   2xl:text-2xl">Food Status</span>
          </label>
          <input type="text"  name="foodStatus" value={"available"} disabled  placeholder="Food Status(available/Not Available)" className="input border-3  md:text-lg text-base  2xl:text-2xl border  outline outline-gray-200" required />
         
        </div>
      </div>
     
      <div className="form-control ">
      <label className="label">
            <span className="label-text md:text-lg text-base   2xl:text-2xl">Request Date</span>
          </label>
        <input type="text"  name="requestDate" id=""  placeholder="Additional Information"  value={moment().format('L')} disabled className="input border-3  md:text-lg text-base  2xl:text-2xl border  outline outline-gray-200" required />

      </div>
      <div className="form-control ">
      <label className="label">
            <span className="label-text md:text-lg text-base   2xl:text-2xl">Request Time</span>
          </label>
        <input type="text"  name="requestTime" id=""  placeholder="Additional Information"  value={moment().format('LTS')} disabled className="input border-3  md:text-lg text-base  2xl:text-2xl border  outline outline-gray-200" required />

      </div>
        {/* start */}
        <div className=" gap-7 grid-cols-3">
            <div className="form-control">
          <label className="label">
            <span className="label-text md:text-lg text-base  2xl:text-2xl">Donator Name</span>
          </label>
          <input type="text" value={donatorName} disabled name="donatorName"  placeholder="Donator Name"  className="input border-3  md:text-lg text-base  2xl:text-2xl border  outline outline-gray-200" required />
        </div>
        
        <div className="form-control ">
          <label className="label">
            <span className="label-text md:text-lg text-base  2xl:text-2xl">Donator Email</span>
          </label>
          <input type="email" value={donatorEmail} name="donatorEmail" disabled  placeholder="Donator Email" className="input border-3  md:text-lg text-base  2xl:text-2xl border  outline outline-gray-200" required />
         
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text md:text-lg text-base  2xl:text-2xl">Your Email</span>
          </label>
          <input type="email" value={user?.email} disabled name="email"   placeholder="Donator Email" className="input border-3  md:text-lg text-base  2xl:text-2xl border  outline outline-gray-200" required />
         
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text md:text-lg text-base  2xl:text-2xl">Your Name</span>
          </label>
          <input type="text" value={user?.displayName} disabled name="name"   placeholder="Donator Email" className="input border-3  md:text-lg text-base  2xl:text-2xl border  outline outline-gray-200" required />
         
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text md:text-lg text-base  2xl:text-2xl">Your Photo</span>
          </label>
          <input type="text" value={user?.photoURL} disabled name="photo"   placeholder="Donator Email" className="input border-3  md:text-lg text-base  2xl:text-2xl border  outline outline-gray-200" required />
         
        </div>
        <div className="form-control ">
      <label className="label">
            <span className="label-text md:text-lg text-base   2xl:text-2xl">Additional Notes</span>
          </label>
        <textarea  name="additionalInformation" id="" cols="30" placeholder="Additional Information" rows="10" defaultValue={additionalInformation}  className="input h-[20vh] px-[1%] pt-[1%]   md:text-lg text-base  2xl:text-2xl input-bordered     outline outline-gray-200" required ></textarea>

      </div>
      <div className="form-control ">
          <label className="label">
            <span className="label-text md:text-lg text-base  2xl:text-2xl">Donation Money</span>
          </label>
          <input type="text" defaultValue={0}  name="donationMoney"   placeholder="Donator Email" className="input border-3  md:text-lg text-base  2xl:text-2xl border  outline outline-gray-200" required />
         
        </div>
      </div>
      
    
        <div className="form-control mt-6">
         
      
       <button id="request-button"className="btn btn-primary text-base md:text-xl 2xl:text-2xl text-black capitalize bg-yellow-400 border-none hover:bg-yellow-600">Request</button>
      
        </div>
      </form>
    <div className="modal-action">
        {/* end */}
      <form className="flex items-center justify-between" method={`dialog`}>
        {/* if there is a button in form, it will close the modal */}
       {request ? <p className="text-green-600 w-[70%]  md:text-lg text-base  2xl:text-xl">You have successfully sent the request. Please close the modal.</p> : ""}
        <button className="btn 2xl:text-xl text-base md:text-lg ">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </>
    )
}

export default Detail;