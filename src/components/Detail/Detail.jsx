import { useContext } from "react"
import { AuthContext } from "../../Providers/AuthProvider"



const Detail = ({oneDetail}) => {
    const {foodName , foodImage , foodQuantity , expiredDate, donatorName , donatorEmail , pickupLocation , additionalInformation} = oneDetail
    console.log(foodName)
    const {user} = useContext(AuthContext)
    return (
        <>
        <div className="w-max mx-auto">
           <div className="mt-[5vh] w-max mx-auto  md:text-xl 2xl:text-2xl mb-[10vh] ">
             <h3 className="lg:text-4xl text-center text-2xl mb-[5vh] font-bold">Donar <span className=" text-teal-500">Information</span></h3>
             <p className="mb-[3vh] text-gray-600"><span className="font-black text-black">Donar name</span> :   {donatorName}</p>
             <p className="mb-[3vh] font-thin text-gray-600"><span className="font-black text-black">Pickup Location</span> :   {pickupLocation}</p>

           </div>
           {/* food */}
           <div>
            <h3 className="lg:text-4xl text-center text-2xl mb-[5vh] font-bold"><span className="text-teal-500">Food</span> Details</h3>
            {/* start */}
            <div className="drop-shadow-xl shadow-xl rounded-md lg:rounded-2xl space-y-5 md:text-xl 2xl:text-2xl mb-[10vh] p-[5%] pb-[7%]">
               <img className=" w-[80vw] lg:w-[40vw]" src={foodImage} alt="" />
               <p className="text-gray-600"><span className="text-black font-black">Food Name</span> : {foodName}</p>
               <p className="text-gray-600"><span className="text-black font-black">Food Quantity</span> : {foodQuantity}</p>
               <p className="text-gray-600"><span className="text-black font-black">Expired Date</span> : {expiredDate}</p>
               <div className=" text-end pt-[5%]">
               <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="btn flex-1 hover:bg-teal-500 px-6 capitalize 2xl:text-2xl py-2 w-max mx-auto bg-teal-400 ">Request</button>
               </div>
            </div>

           </div>
        </div>
        {/* <div className=" drop-shadow-xl shadow-xl rounded-2xl bg-white z-10 w-[40vw] left-[30%]   h-[40vh] absolute top-[50%]">

        </div> */}
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box  2xl:text-2xl md:text-xl text-base">
    {/* start */}
    <form  className="card-body ">
        {/* start */}
        <div className="  gap-7 grid-cols-2">
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
            <span className="label-text md:text-lg text-base   2xl:text-2xl">Additional Information</span>
          </label>
        <textarea  name="additionalInformation" id="" cols="30" placeholder="Additional Information" rows="10" value={additionalInformation} disabled className="input h-[20vh] px-[1%] pt-[1%]   md:text-lg text-base  2xl:text-2xl input-bordered     outline outline-gray-200" required ></textarea>

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
          <input type="email" value={user?.displayName} disabled name="donatorEmail"   placeholder="Donator Email" className="input border-3  md:text-lg text-base  2xl:text-2xl border  outline outline-gray-200" required />
         
        </div>
      </div>
      
    
        <div className="form-control mt-6">
          <button className="btn btn-primary text-base md:text-xl 2xl:text-2xl text-black capitalize bg-teal-400 border-none hover:bg-teal-600">Request</button>
        </div>
      </form>
    <div className="modal-action">
        {/* end */}
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn 2xl:text-xl md:text-lg text-base">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </>
    )
}

export default Detail;