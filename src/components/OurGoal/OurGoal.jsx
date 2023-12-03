import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";

const OurGoal = () => {
    const controls = useAnimation();
  
    const [animated, setAnimated] = useState(false);
    useEffect(()=>{
        const handelScroll = () => {
           
           
            const element = document.getElementById("animated-element");
            if (element) {
              const elementTop = element.getBoundingClientRect().top;
              const elementBottom = element.getBoundingClientRect().bottom;
        
              if (elementTop < window.innerHeight && elementBottom > 0 && !animated) {
                controls.start({
                  rotate: 360, // Rotate by 360 degrees
                  opacity: 1, // Set opacity to 1
                });
                setAnimated(true);
              }
            }

        }
        window.addEventListener("scroll" , handelScroll)
        return () => {
            window.removeEventListener ("scroll" , handelScroll)
        }
    },[])
    return (
        <>
        <div className="2xl:pb-[0vh] xl:pb-[10] lg:pb-[15vh] pb-[22vh] ">
            
        <div className="lg:block hidden" style={{ height: "100vh", marginLeft:"auto", marginRight:"auto" }}>
        <motion.div
           id="animated-element"
           initial={{ rotate: 0, opacity: 0 }}
           animate={controls}
         >
         <p className="2xl:text-5xl lg:text-4xl pt-[20vh]  text-yellow-500 text-3xl text-center font-bold"><span className="text-gray-600">Our</span> Goal</p>
         <div className="text-center w-[80vw] lg:w-[40vw] mx-auto drop-shadow-xl shadow-xl mt-[10vh]  d-200">
            <p className="text-center  2xl:text-2xl text-base md:text-xl p-[4%]">
            At Eat Together, our mission is to foster a sense of community and reduce food waste by connecting individuals who have surplus food with those who are in need or simply share a passion for delicious and sustainable meals. We are dedicated to promoting food sharing as a way to create a more environmentally conscious and socially responsible world. Our goal is to make it easy for you to share your culinary creations, find incredible homemade dishes, and contribute to a global effort to combat food waste. Together, we can build a more interconnected, caring, and environmentally conscious food-sharing community. Join us in this journey towards a brighter, more sustainable future, one meal at a time.
            </p>
        </div>
        </motion.div>
         </div>
         <div className="lg:hidden block">
         <h3 className="2xl:text-5xl lg:text-4xl pt-[20vh]  text-yellow-500 text-3xl text-center font-bold"><span className="text-gray-600">Our</span> Goal</h3>
         <div className="text-center w-[80vw] lg:w-[40vw] mx-auto drop-shadow-xl shadow-xl mt-[10vh]  d-200">
            <p className="text-center  2xl:text-2xl text-base md:text-xl p-[4%]">
            At Eat Together, our mission is to foster a sense of community and reduce food waste by connecting individuals who have surplus food with those who are in need or simply share a passion for delicious and sustainable meals. We are dedicated to promoting food sharing as a way to create a more environmentally conscious and socially responsible world. Our goal is to make it easy for you to share your culinary creations, find incredible homemade dishes, and contribute to a global effort to combat food waste. Together, we can build a more interconnected, caring, and environmentally conscious food-shar ing community. Join us in this journey towards a brighter, more sustainable future, one meal at a time.
            </p>
        </div>
    </div>
         
       </div>
       {/* second */}
       </>
    );
};

export default OurGoal;