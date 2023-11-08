import axios from "axios";


const useAxios = () => {
    const defaultAxios = axios.create({
        baseURL : 'https://food-sharing-server.vercel.app',
        withCredentials : true
        
       
        

    })
    return (
        defaultAxios
    );
};

export default useAxios;