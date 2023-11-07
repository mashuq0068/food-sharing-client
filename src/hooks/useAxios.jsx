import axios from "axios";


const useAxios = () => {
    const defaultAxios = axios.create({
        baseURL : 'http://localhost:5000',
        withCredentials : true
        
       
        

    })
    return (
        defaultAxios
    );
};

export default useAxios;