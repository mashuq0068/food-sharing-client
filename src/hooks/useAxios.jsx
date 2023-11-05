import axios from "axios";


const useAxios = () => {
    const defaultAxios = axios.create({
        baseURL : 'http://localhost:5000'
        

    })
    return (
        defaultAxios
    );
};

export default useAxios;