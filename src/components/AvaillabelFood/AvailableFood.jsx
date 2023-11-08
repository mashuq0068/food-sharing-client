import useAxios from "../../hooks/useAxios";

import OneFood from "../oneFood/OneFood";
import { useEffect, useState } from "react";

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
      <span className="loading loading-spinner text-teal-500 text-7xl w-[2%] absolute top-[40%] left-[50%]"></span>
    );
  }

  return (
    <div className="mt-[15vh] px-[6%] pb-[7%]">
      <div className="mb-[10vh]">
        <div className="text-end flex justify-between">
          <form onSubmit={handleSearch} className="flex">
            <input
              name="search"
              type="text"
              placeholder="Search by Food Name"
              className="input rounded-r-none md:text-lg  text-base 2xl:text-2xl input-bordered drop-shadow-xl w-[30vw]"
            />
            <input
              type="submit"
              className="btn bg-teal-400 capitalize drop-shadow-xl hover-bg-teal-400 border-none lg:text-xl text-base 2xl:text-2xl rounded-l-none"
              value="Search"
            />
          </form>
          <button
            onClick={handleSort}
            className="btn bg-teal-400 capitalize drop-shadow-xl shadow-xl hover-bg-teal-400 border-none lg:text-lg text-base 2xl:text-2xl"
          >
            Sort By Expired Date
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
