
import useAxios from "../../hooks/useAxios";
import OneFood from "../oneFood/OneFood";
import { useEffect, useState } from "react";


const AvailableFood = () => {
    const secureAxios = useAxios()
   const [foods , setFoods] = useState([])
 
   const [loading , setLoading] = useState(true)
   function compareFoods(a, b) {
    const dateA = new Date("20" + a.expirationDate.split('/').join('-'));
    const dateB = new Date("20" + b.expirationDate.split('/').join('-'));
    return dateA - dateB;
  }
   const handleSort = () => {
    
    const sortedFoods = [...foods].sort(compareFoods);
    setFoods(sortedFoods)

   }
   useEffect(()=>{
      secureAxios.get('/foods')
      .then(res => {
        setFoods(res.data)
        setLoading(false)
      })
   },[])
  
    if (loading ){
        return(
          <span className="loading loading-spinner text-teal-500 text-7xl w-[2%] absolute top-[40%] left-[50%]"></span>
        )
     }
   
     
     
      return(
        <div>
          <button onClick={handleSort} className="btn tex-2xl">Add to sort</button>
          <div>

          </div>
       <div className="grid lg:grid-cols-3 p-[6%] md:grid-cols-2 grid-cols-1 gap-7 ">
       {  foods?.map(food => <OneFood key={food._id} food={food}></OneFood>)}
       </div>
       </div>
      )
 
};

export default AvailableFood;