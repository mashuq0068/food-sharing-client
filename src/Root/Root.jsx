import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
           <div className="mt-[20vh]">
           <Footer></Footer>
           </div>
        </div>
    );
};

export default Root;