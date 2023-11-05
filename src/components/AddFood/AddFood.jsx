import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const AddFood = () => {
    const{user} = useContext(AuthContext)
    return (
        <div className="flex justify-center items-center h-full">
           
        <div className="relative">
            
             <div className="">
            <img className="opacity-70 md:h-auto md:w-auto w-[100vw]  " src="https://static01.nyt.com/images/2018/03/22/style/22mealshare-1/00mealshare-1-superJumbo.jpg" alt="" />
            <div className="bg-black opacity-70 absolute top-0 left-0 w-[100vw] h-full"></div>
        </div>
           <div className="hero min-h-screen absolute w-[80vw] left-[10%] top-[13%] ">
            
  <div className="hero-content flex-col w-full lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-full max-w-sm lg:max-w-4xl 2xl:max-w-6xl mx-auto shadow-2xl bg-base-100">
      <form className="card-body">
        {/* start */}
        <div className=" lg:grid gap-7 grid-cols-2">
            <div className="form-control">
          <label className="label">
            <span className="label-text md:text-lg text-base  2xl:text-2xl">Food Name</span>
          </label>
          <input type="text" placeholder="Food Name" className="input  md:text-lg text-base  2xl:text-2xl input-bordered" required />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text md:text-lg text-base   2xl:text-2xl">Food Image</span>
          </label>
          <input type="text" placeholder="Food Image" className="input  md:text-lg text-base  2xl:text-2xl input-bordered" required />
         
        </div>
      </div>
        {/* start */}
        <div className=" lg:grid gap-7 grid-cols-2">
            <div className="form-control">
          <label className="label">
            <span className="label-text md:text-lg text-base   2xl:text-2xl ">Food Quantity</span>
          </label>
          <input type="text" placeholder="Food Quantity" className="input   md:text-lg text-base  2xl:text-2xl input-bordered" required />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text md:text-lg text-base   2xl:text-2xl">Pickup Location</span>
          </label>
          <input type="text" placeholder="Pickup Location" className="input  md:text-lg text-base  2xl:text-2xl input-bordered" required />
         
        </div>
      </div>
        {/* start */}
        <div className=" lg:grid gap-7 grid-cols-2">
            <div className="form-control">
          <label className="label">
            <span className="label-text md:text-lg text-base  2xl:text-2xl">Expired Date</span>
          </label>
          <input type="text" placeholder="Expired Date" className="input  md:text-lg text-base  2xl:text-2xl input-bordered" required />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text md:text-lg text-base   2xl:text-2xl">Food Status</span>
          </label>
          <input type="text" defaultValue={"Available"} placeholder="Food Status(available/Not Available)" className="input  md:text-lg text-base  2xl:text-2xl input-bordered" required />
         
        </div>
      </div>
      <div className="form-control ">
      <label className="label">
            <span className="label-text md:text-lg text-base   2xl:text-2xl">Additional Information</span>
          </label>
        <textarea  name="" id="" cols="30" placeholder="Additional Information" rows="10" className="input h-[20vh] px-[1%] pt-[1%]   md:text-lg text-base  2xl:text-2xl input-bordered" required ></textarea>

      </div>
        {/* start */}
        <div className=" lg:grid gap-7 grid-cols-3">
            <div className="form-control">
          <label className="label">
            <span className="label-text md:text-lg text-base  2xl:text-2xl">Donator Name</span>
          </label>
          <input type="text" defaultValue={user?.displayName} placeholder="Donator Name" className="input  md:text-lg text-base  2xl:text-2xl input-bordered" required />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text md:text-lg text-base   2xl:text-2xl">Donator Image</span>
          </label>
          <input type="text" defaultValue={user?.photoURL} placeholder="Donator Image" className="input  md:text-lg text-base  2xl:text-2xl input-bordered" required />
         
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text md:text-lg text-base   2xl:text-2xl">Donator Email</span>
          </label>
          <input type="email" defaultValue={user?.email} placeholder="Donator Email" className="input  md:text-lg text-base  2xl:text-2xl input-bordered" required />
         
        </div>
      </div>
      
    
        <div className="form-control mt-6">
          <button className="btn btn-primary text-2xl text-black capitalize bg-teal-400 border-none hover:bg-teal-600">Add Food</button>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
</div>
        
    );
};

export default AddFood;