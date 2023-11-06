
// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Detail from "../../components/Detail/Detail";
// import useAxios from "../../hooks/useAxios";
// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";



const DetailsPage = () => {
   
    
    const data = useLoaderData()
   
    
    return (
        <div>
            {data?.map(oneDetail => <Detail key={oneDetail._id} oneDetail={oneDetail}></Detail>)}
        </div>
    );
};

export default DetailsPage;