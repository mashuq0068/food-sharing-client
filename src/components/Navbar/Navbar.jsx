import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const link = 
    <>
     <div className="flex lg:flex-row flex-col items-center gap-7 lg:gap-12 text-base 2xl:text-[22px]">
     <NavLink className='nav duration-100' to='/'>Home</NavLink>
     <NavLink className='nav duration-100' to='/availableFoods'>Available Foods</NavLink>
     <NavLink className='nav duration-100' to='/addFood'>Add Food</NavLink>
     <NavLink className='nav duration-100' to='/ManageFoods'>Manage My Foods</NavLink>
     <NavLink className='nav duration-100' to='/foodRequest'>My Food Request</NavLink>
     </div>
    </>
    return (
        <div className="lg:px-[2%] drop-shadow-xl shadow-xl sticky top-0 z-40">
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
   <div className="flex items-center gap-3   2xl:text-3xl text-base md:text-xl">
   <img className="w-[18%] lg:w-[20%]" src="https://i.postimg.cc/g06Sjfnd/th-removebg-preview-4.png" alt="" />
   
    <p>Eat Together</p>
    
   </div>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {link}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/signUp' className="btn text-base bg-teal-400  hover:bg-teal-400  2xl:text-xl">Sign Up</Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;