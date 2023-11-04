import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../Components/Navbar/NavBar";
import loading from "../../public/loading.json";
import Lottie from "lottie-react";
import FooTer from "../Components/Footer/Footer";

const Root = () => {
  const navigation = useNavigation();
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-3 mt-5 mb-16">
        <NavBar />
        {navigation.state === "loading" ? (
          <div className=" flex justify-center items-center text-5xl md:text-9xl py-44 font-bold">
            L <Lottie animationData={loading} /> ADING
          </div>
        ) : (
          <Outlet />
        )}
      </div>
      <FooTer />
    </div>
  );
};
export default Root;
