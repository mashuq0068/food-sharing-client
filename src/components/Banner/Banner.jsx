import React, { useEffect } from "react";
import BiryaniImg1 from "../../assets/biryani3.png";
import BiryaniImg2 from "../../assets/biryani5.png";
import BiryaniImg3 from "../../assets/biryani2.png";
import Vector from "../../assets/vector3.png";
import Aos from "aos";

const ImageList = [
  {
    id: 1,
    img: BiryaniImg1,
  },
  {
    id: 2,
    img: BiryaniImg2,
  },
  {
    id: 3,
    img: BiryaniImg3,
  },
];

const Hero = () => {
  const [imageId, setImageId] = React.useState(BiryaniImg3);

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  useEffect(()=>{
    Aos.init()
  })

  return (
    <>
      <div
        className="min-h-[550px]  sm:min-h-[600px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <h1 className="text-4xl sm:text-3xl lg:text-5xl font-bold">
                Welcome to {""}
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-yellow-400 to-yellow-600">
                  Eat
                </span>{" "}
                Together
              </h1>
              <p className="text-sm ">
              Share your food with people fot their need with us, we wre here with you to work with your extra food and reach your food to needy people. This website is made by fully donating purpose
              
              </p>
              <div>
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                  Get food
                </button>
              </div>
            </div>
            {/* Image section */}
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  data-aos-once="true"
                  src={imageId}
                  alt="biryani img"
                  className="w-[300px] sm:w-[450px] sm:scale-125  mx-auto spin "
                />
              </div>
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full">
                {ImageList.map((item , i) => (
                  <img
                  key={i}
                    data-aos="zoom-in"
                    data-aos-duration="400"
                    data-aos-once="true"
                    src={item.img}
                    onClick={() => {
                      setImageId(
                        item.id === 1
                          ? BiryaniImg1
                          : item.id === 2
                          ? BiryaniImg2
                          : BiryaniImg3
                      );
                    }}
                    alt="biryani img"
                    className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
