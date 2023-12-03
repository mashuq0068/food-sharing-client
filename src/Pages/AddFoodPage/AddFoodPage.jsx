import { Helmet } from "react-helmet";
import AddFood from "../../components/AddFood/AddFood";


const AddFoodPage = () => {
    return (
        <div>
        <Helmet>
        <title>Eat Together | Add Food</title>
      </Helmet>
       <AddFood></AddFood>
        </div>
    );
};

export default AddFoodPage;