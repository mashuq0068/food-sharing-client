

const OneFood = ({food}) => {
    const {foodImage , foodQuantity ,additionalInformation, donatorName , donatorImage , pickupLocation , expiredDate , additionalNotes} = food
    return (
        <div className="bg-white space-y-5 drop-shadow-xl shadow-xl text-2xl pb-[5%]">
            <img src={foodImage} className="w-full h-[40vh]" alt="" />
           <div className=" space-y-2 px-[5%] ">
           <p>Quantity : {foodQuantity}</p>
           <p>Pickup Location : {pickupLocation}</p>
           <p>expired Date : {expiredDate}</p>
           <p>Donator Name : {donatorName}</p>
           <p>Donator Image : {donatorImage}</p>
           <p>Additional Notes : {additionalInformation}</p>
           </div>
           <div>
            <button className="btn bg-teal-400 ">Details</button>
           </div>
        </div>
    );
};

export default OneFood;