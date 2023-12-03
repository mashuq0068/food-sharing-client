import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import FeaturesFood from "../../components/FeaturesFood/FeaturesFood";
import FaqPage from "../FaqPage/FaqPage";
import OurGoal from "../../components/OurGoal/OurGoal";


const HomePage = () => {
    return (
        <div>
    <Helmet>
      <title>Eat Together | Home</title>
    </Helmet>
        <div>
          <Banner></Banner>
         <div>
         <FeaturesFood></FeaturesFood>
         </div>
         <div className=" block md:hidden">
         <OurGoal></OurGoal>
         </div>
         <FaqPage></FaqPage>
        </div>
        </div>
    );
};

export default HomePage;