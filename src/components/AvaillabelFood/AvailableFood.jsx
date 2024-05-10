
import useAxios from "../../hooks/useAxios";

import OneFood from "../oneFood/OneFood";
import { useEffect, useState } from "react";
import { GrFilter } from "react-icons/gr";

const AvailableFood = () => {
  const secureAxios = useAxios();
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]); // New state for filtered data
  const [loading, setLoading] = useState(true);
  

  function compareFoods(a, b) {
    if (a.expiredDate && b.expiredDate) {
      const dateA = new Date("20" + a.expiredDate.split('/').join('-'));
    
      
      const dateB = new Date("20" + b.expiredDate.split('/').join('-'));
      
      return dateA - dateB;
    }
  }

  const handleSort = () => {
    const sortedFoods = [...filteredFoods].sort(compareFoods);
    setFilteredFoods(sortedFoods);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    const filterByName = [...foods].filter((food) =>{
    if(food.foodName){
     return search.toLowerCase().includes(food.foodName.toLowerCase())
    }
  });
    setFilteredFoods(filterByName);
  };

  useEffect(() => {
    secureAxios.get('/foods').then((res) => {
      setFoods(res.data);
      setFilteredFoods(res.data); 
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <span className="loading loading-spinner text-yellow-500 text-7xl w-[2%] absolute top-[40%] left-[50%]"></span>
    );
  }

  return (
    <div className="mt-[15vh] max-w-[1500px] mx-auto px-[6%] pb-[7%]">
    
      <div className="mb-[10vh]">
        <div className="text-end flex md:flex-row md:w-auto w-[80vw] flex-col justify-between">
          <form onSubmit={handleSearch} className="flex md:w-auto w-[80vw]">
            <input
              name="search"
              type="text"
              placeholder="Search by Food Name"
              className="input md:h-full rounded-r-none md:text-lg  text-base  input-bordered drop-shadow-xl w-full h-[10vh] md:w-[30vw]"
            />
            <input
              type="submit"
              className="middle none  rounded-l-none  2xl:text-lg center rounded-lg bg-yellow-400 md:py-3 py-2 px-6 font-sans text-xs font-semibold capitalize shadow-md shadow-orange-500/20 transition-all hover:shadow-lg n focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"data-ripple-light ="true" 
              value="Search"
            />
          </form>
          <button
            onClick={handleSort}
            className="middle none md:mt-0 mt-[6%] rounded-xl flex items-center gap-2 2xl:text-lg center g bg-yellow-400 py-3  px-6 font-sans text-xs font-semibold capitalize shadow-md shadow-orange-500/20 transition-all hover:shadow-lg nfocus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"data-ripple-light ="true" 
          >
            <GrFilter/> by Expired Date
          </button>
        </div>
      </div>
      <div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
          {filteredFoods.map((food) => (
            <OneFood key={food._id} food={food} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default AvailableFood;
