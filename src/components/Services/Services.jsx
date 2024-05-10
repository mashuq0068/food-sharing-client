// import React from "react";
import Img from "../../assets/biryani.png";
import Img2 from "../../assets/biryani2.png";
import Img3 from "../../assets/biryani4.png";
// import StarRatings from "react-star-ratings";
const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Save food",
    description:
      "If you have extra food, please don't give it to dust. call us we will take it for needy people.",
  },
  {
    id: 2,
    img: Img2,
    name: "Deliver food",
    description:
      "If anyone is not able to buy food, we will deliver it to his own house. Also you can give it by your own",
  },
  {
    id: 3,
    img: Img2,
    name: "Help people",
    description:
      "Our purpose and goal is help people and make a happy society without any problem and save foods from waste.",
  },
];
const Services = () => {
  return (
    <div className="container-custom mt-[15vh]">
      <span id="services"></span>
      <div className="">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
         
            <h1 className="text-3xl mb-[2vh] font-bold">Services</h1>
            <p className="text-xs mb-[5vh] text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis delectus architecto error nesciunt,
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-yellow-500 dark:hover:bg-yellow-500 hover:text-white relative shadow-xl duration-high group max-w-[350px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full ">
                    {/* <StarRatings
                      rating={4}
                      starRatedColor="yellow"
                      isSelectable={false}
                      starHoverColor="yellow"
                      // starSelectingHoverColor
                      starDimension="20px"
                      changeRating={() => {}}
                      numberOfStars={5}
                      name="rating"
                    /> */}
                  </div>
                  <h1 className="text-xl font-bold mb-[1vh]">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
