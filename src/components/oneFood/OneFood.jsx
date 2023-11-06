import { Link } from "react-router-dom";


const OneFood = ({food}) => {
    const {foodImage , foodQuantity ,additionalInformation, donatorName , donatorPhoto , pickupLocation , expiredDate , additionalNotes} = food
    return (
        <>
       
        
      <div className=" bg-white pb-[10%] drop-shadow-xl rounded-lg shadow-xl relative ">
        <div className="">
            <div>
               
    
        <div className="bg-white space-y-5 lg:text-base  2xl:text-2xl relative ">
            <img src={foodImage} className="w-full h-[40vh]" alt="" />
           <div className=" space-y-2 px-[5%] pb-[10%]">
           <p>Quantity : {foodQuantity}</p>
           <p>Pickup Location : {pickupLocation}</p>
           <p>expired Date : {expiredDate}</p>
           <p className=" pb-[13%]">Additional Notes : {additionalInformation}</p>
           
           
           </div>
          </div>
           
           
           </div>
           
           <div className="w-max mx-auto absolute bottom-[3%] left-[30%] ">
            <Link to='/details' className="btn hover:bg-teal-700 px-6 capitalize 2xl:text-2xl py-2 w-max mx-auto bg-teal-400 ">View Details</Link>
           </div>
       
           <div className=" flex items-center gap-3">
         
         </div>
         </div>
         
       <div>
       
       </div>
       <div className=" flex items-center gap-3 absolute bottom-[13%] left-[4%]">
       <div className="profile-picture ">
         <img className="rounded-profile" src={donatorPhoto} alt="" />
         </div>
         <p className="2xl:text-2xl">{donatorName} (Donator)</p>
         </div>
       </div>

       </>
       
    );
};

export default OneFood;