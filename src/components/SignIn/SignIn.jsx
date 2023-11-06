import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";


const SignIn = () => {
    const location = useLocation()
    const navigate = useNavigate()
    
    const { 
        loginUser,
        userWithGoogle,
        user
      } =useContext(AuthContext)
        

    
    const handleSubmit =(e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email,password)
        loginUser(email,password)
        .then(data => {
            console.log(data)
            navigate(location?.state ? location.state : "/")
            

            
           
        })
        .catch(error => {
            toast.error(`${error.code} dose not match email or password`)
            console.error(error.code)
        })
        

    }
   
    const handleGoogle = () => {
        userWithGoogle()
        .then(data => {
            console.log(data)
            navigate(location?.state ? location.state: "/")
        })
        .catch(error => {
            
            console.error(error.code)
        })
    }
    return (
        <div>
              <div className="relative">
            <div className="">
           
            <img className="opacity-70 md:h-auto md:w-auto w-[100vw]  " src="https://static01.nyt.com/images/2018/03/22/style/22mealshare-1/00mealshare-1-superJumbo.jpg" alt="" />
            <div className="bg-black opacity-70 absolute top-0 left-0 w-[100vw] h-full"></div>
        </div>
        <div className="linear absolute w-[100%] top-[2%]  pb-[10%] ">
           
            <Toaster
                position="top-right"
                reverseOrder={false}
                
            />
            <h1 className=" text-4xl text-white font-bold text-center mt-8 mb-12 ">Sign<span className="text-teal-500"> In</span></h1>
            <div className="w-[80%]  lg:w-[35%] mx-auto">
           
            <div className="hero w-full  bg-base-200">
  <div className=" w-full flex-col ">
  
    <div className=" flex-shrink-0 w-full  h-auto shadow-2xl bg-base-100">
        
      <form onSubmit={handleSubmit} className="card-body w-full h-auto">
      
        <div className="form-control">
          <label className="label">
            <span className="label-text 2xl:text-2xl lg:text-xl">Email</span>
          </label>
          <input type="email" defaultValue={user?.email} placeholder="email" name="email" className="input 2xl:text-2xl lg:text-xl input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text 2xl:text-2xl lg:text-xl">Password</span>
          </label>
          <input type="password" defaultValue={user?.password} placeholder="password" name="password" className="input 2xl:text-2xl lg:text-xl input-bordered" required />
          
        </div>
        <div>
          <p className="text-black mt-3 2xl:text-2xl text-center ">Already a user ? go for <Link to='/signUp' className="text-teal-700 font-bold ">Sign Up</Link></p>
        </div>
        <div className="form-control mt-6">
         <input type="submit" className=" text-black font-bold cursor-pointer btn-primary py-2 rounded-lg border-none  2xl:text-2xl text-xl linear bg-teal-400 hover:bg-teal-500" value="Sign In" />
        </div>
      
        <button onClick={handleGoogle}  className="text-red mt-5  xl:text-base 2xl:text-2xl  text-center hover:before:bg-red rounded-xl font-semibold  relative py-3 w-full overflow-hidden border border-teal-400 bg-white px-3 md:px-16 text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-teal-400 before:transition-all before:duration-200 hover:text-black hover:shadow-teal-400 hover:before:left-0 hover:before:w-full"><span className="relative z-10 gap-2 w-max mx-auto flex items-center"><span className=''><AiOutlineGoogle></AiOutlineGoogle></span>Continue with Goggle</span></button>
      </form>
    </div>
  </div>
</div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default SignIn;