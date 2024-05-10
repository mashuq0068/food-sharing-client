import { Link } from "react-router-dom";


const OneFood = ({food}) => {
    const {foodImage , foodQuantity ,additionalInformation, donatorName , donatorPhoto , pickupLocation , expiredDate , additionalNotes , foodName , _id} = food
  
    return (
        <>
  
<div className='flex items-center justify-center   px-2'>
    <div className='w-full   mx-auto bg-white rounded-3xl shadow-xl overflow-hidden'>
        <div className=' mx-auto'>
        <div
  className='h-[236px]'
  style={{
    backgroundImage: `url(${foodImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
></div>

          <div className='p-4 sm:p-6'>
            <p className='font-bold text-gray-700 text-[22px] leading-7 mb-1'>{foodName}</p>
            <div className='flex flex-row'>
              <p className='text-[#3C3C4399] text-[17px] mr-2 line-through'>MVR 700</p>
              <p className='text-[17px] font-bold text-[#0FB478]'>MVR 700</p>
            </div>
            <p className='text-[#7C7C80] font-[15px] mt-6'>{additionalInformation}</p>


              <Link to={`/details/${_id}`} target='_blank' rel="noreferrer" href='foodiesapp://food/1001'  className='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-yellow-400 rounded-[14px] hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-80'>
                  View Details
              </Link>
            <a target='_blank' rel="noreferrer" href="https://apps.apple.com/us/app/id1493631471" className='block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-80'>
                  Download app
              </a>
          </div>
        </div>
    </div>
</div>
        
     
  


       </>
       
    );
};

export default OneFood;