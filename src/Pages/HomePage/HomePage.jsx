import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import FeaturesFood from "../../components/FeaturesFood/FeaturesFood";
import FaqPage from "../FaqPage/FaqPage";


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
         <FaqPage></FaqPage>
        </div>
        </div>
    );
};

export default HomePage;