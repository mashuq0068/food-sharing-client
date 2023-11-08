import Banner from "../../components/Banner/Banner";
import FeaturesFood from "../../components/FeaturesFood/FeaturesFood";
import FaqPage from "../FaqPage/FaqPage";


const HomePage = () => {
    return (
        <div>
          <Banner></Banner>
         <div>
         <FeaturesFood></FeaturesFood>
         </div>
         <FaqPage></FaqPage>
        </div>
    );
};

export default HomePage;