import PropTypes from 'prop-types';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  const { status , statusText } = error;
  console.log(status)

  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='w-[80%] lg:w-[50%] text-center text-base  lg:text-xl space-y-5'>
            <div className='text-center'>
            <a href="https://imgbb.com/"><img className='w-[300px] mx-auto' src="https://i.ibb.co/HqYb9x2/girl-dropping-food-on-the-floor-vector-removebg-preview.png" alt="girl-dropping-food-on-the-floor-vector-removebg-preview" border="0"/></a>
            </div>
            <p className='text-teal-500 pt-[6vh] font-bold 2xl:text-5xl lg:text-3xl font bold text-xl'>{status} {statusText}</p>
            <p className='2xl:text-2xl md:text-xl text-base '>
                {error?.error?.message}
            </p>
            
        </div>
    </div>
  );
};


ErrorPage.propTypes = {
  error: PropTypes.shape({
    status: PropTypes.number.isRequired,
    statusText: PropTypes.string.isRequired,
  }),
}
export default ErrorPage