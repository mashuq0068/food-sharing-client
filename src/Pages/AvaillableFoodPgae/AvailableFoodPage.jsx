import { Helmet } from "react-helmet";
import AvailableFood from "../../components/AvaillabelFood/AvailableFood";


const AvailableFoodPage = () => {
    return (
        <div>
      <Helmet>
        <title>Eat Together | Available Foods</title>
      </Helmet>
            <AvailableFood></AvailableFood>
        </div>
    );
};

export default AvailableFoodPage;