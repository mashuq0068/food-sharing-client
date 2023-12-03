import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

import useAxios from "../../hooks/useAxios";


const Navbar = () => {
  const {user , logOutUser} = useContext(AuthContext)
  const secureAxios = useAxios()
  
  const [display , setDisplay] = useState("hidden")
  useEffect(()=>{
    const profile = document.getElementById("profile-container")
      profile.addEventListener("mouseover" , function () {
        setDisplay("block")
      })
    profile.addEventListener("mouseout",  function () {
      setDisplay("hidden")
    })
  },[])
 

  const handleSignOut = () => {
    const loggedUser = {email : user?.email}
    logOutUser()
    .then(()=>{
      secureAxios.post('/deleteToken' ,loggedUser, {withCredentials:true})
            .then(res => console.log(res.data))

      console.log("user sign out successfully")
    })
    .catch(error => console.error(error.message))
  }
  
    const link = 
    <>
     <div className="flex lg:flex-row flex-col items-center gap-7 lg:gap-12 text-base 2xl:text-[22px]">
     <NavLink className='nav duration-100' to='/'>Home</NavLink>
     <NavLink className='nav duration-100' to='/availableFoods'>Available Foods</NavLink>
     <NavLink className='nav duration-100' to='/addFood'>Add Food</NavLink>
     <NavLink className='nav duration-100' to="/manageFoods">Manage My Foods</NavLink>
     <NavLink className='nav duration-100' to='/foodRequest'>My Food Request</NavLink>
     <NavLink className='nav duration-100' to='/contact'>Contact us</NavLink>
     </div>
    </>
    return (
        <div className=" drop-shadow-xl h-[10vh] shadow-xl sticky top-0 z-40">
          <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {link}
      </ul>
    </div>
   <div className="flex items-center gap-3    2xl:text-3xl text-base md:text-xl">
   <img className="md:static absolute  w-[10%]  md:w-[18%]  lg:w-[30%]  " src="https://i.ibb.co/XkzWPYp/Screenshot-2023-12-02-180029.png" alt="" />
   {/* <img className="w-[18%] lg:w-[20%] " src="https://i.postimg.cc/g06Sjfnd/th-removebg-preview-4.png" alt="" /> */}
   
    <p className=" font-bold text-gray-700 md:static absolute left-[30%]">Eat <span className="">Together</span></p>
    
   </div>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {link}
    </ul>
  </div>
  <div className="navbar-end">
   <div id="profile-container" className="profile-picture mr-[4%] cursor-pointer">
   {user ?<img className={` rounded-profile`} src={user?.photoURL} alt="" /> : ""}
   </div>
   {!user ? <Link to='/signUp' className="middle none  2xl:text-lg center rounded-lg bg-yellow-400 py-3 px-6 font-sans text-xs font-bold capitalize  shadow-md shadow-orange-500/20 transition-all hover:shadow-lg nfocus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"data-ripple-light ="true" >Sign Up</Link> : <Link onClick={handleSignOut} className="middle none  2xl:text-lg center md:rounded-lg bg-yellow-400 md:py-3 md:px-6 font-sans text-xs  capitalize  shadow-md shadow-orange-500/20 px-3 py-1 rounded-sm transition-all hover:shadow-lg font-semibold n focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"data-ripple-light ="true"  >Sign Out</Link> }



















  </div>
</div>
{/* profile information on hover */}
<div id="user-info" className={`absolute profile-info ${display} bg-white p-[2%] rounded-lg  flex  flex-col lg:text-lg text-base 2xl:text-2xl space-y-3 w-[70vw] md:w-max left-[28vw] md:left-[45vw] lg:left-[70vw] lg:w-[25vw] drop-shadow-xl shadow-xl lg:pl-[2%] pl-[5%]  top-[13vh]  duration-300  mx-auto justify-center `}>
  
      <p>User Name : {user?.displayName}</p>
      <p>Email : {user?.email}</p>
      <p>Last SignIn Time : {user?.metadata?.lastSignInTime}</p>
      <p>Creation Time : {user?.metadata?.creationTime}</p>
      {/* <Link onClick={handleSignOut} className="btn text-base bg-yellow-400 mx-auto  w-[60%] hover:bg-yellow-400  2xl:text-xl ">Sign Out</Link> */}
</div> 
        </div>
    );
};

export default Navbar;