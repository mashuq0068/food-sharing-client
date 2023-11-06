import { useLoaderData } from "react-router-dom";
import Detail from "../../components/Detail/Detail";


const DetailsPage = () => {
    const data = useLoaderData()
    console.log(data.data)
   
    
    return (
        <div>
            {data.data.map(oneDetail => <Detail key={oneDetail._id} oneDetail={oneDetail}></Detail>)}
        </div>
    );
};

export default DetailsPage;