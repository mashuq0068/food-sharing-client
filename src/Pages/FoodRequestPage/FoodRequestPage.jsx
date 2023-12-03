import { Helmet } from "react-helmet";
import FoodRequest from "../../components/FoodRequest/FoodRequest";


const FoodRequestPage = () => {
    return (
        <div>
            <div>
                <Helmet>
                    <title>
                        Eat-together | My Food Request
                    </title>
                </Helmet>
            </div>
            <FoodRequest></FoodRequest>
        </div>
    );
};

export default FoodRequestPage;