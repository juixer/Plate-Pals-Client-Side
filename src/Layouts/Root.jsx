import { Outlet } from "react-router-dom";
import NavBar from "../Components/Navbar/NavBar";

const Root = () => {
    return(
        <div className="max-w-screen-2xl mx-auto">
            <NavBar/>
            <Outlet/>
        </div>
    )}
export default Root;