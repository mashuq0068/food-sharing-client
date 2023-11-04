

const Banner = () => {
    return (
        <div className="relative">
        <div className="">
            <img className="opacity-70 md:h-auto md:w-auto  h-[120vh]" src="https://static01.nyt.com/images/2018/03/22/style/22mealshare-1/00mealshare-1-superJumbo.jpg" alt="" />
            <div className="bg-black opacity-70 absolute top-0 left-0 w-[100vw] h-full"></div>
        </div>
        <div className="absolute  top-[30%] w-full">
           
            <p className="font-bold before:w-0 after:w-max duration-1000  md:text-3xl text-2xl lg:text-4xl 2xl:text-5xl text-center drop-shadow-xl shadow-teal-400 relative  z-10 text-white slide-from-left">Save Food <span className="text-teal-500 duration-1000 slide-from-left ">Save life</span></p>
        </div>
        

    </div>
    
    );
};

export default Banner;