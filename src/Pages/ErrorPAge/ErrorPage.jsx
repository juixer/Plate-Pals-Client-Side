import Lottie from "lottie-react";
import errorAni from "../../../public/error.json";
import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex flex-col justify-center items-center md:py-44 py-16">
      <div className="">
        <Lottie animationData={errorAni} />
      </div>
      <div className="text-center space-y-5">
        <h1 className="text-2xl font-bold">{error?.statusText}</h1>
        <h1 className="text-2xl font-bold">{error.error?.message}</h1>
        <Link to={'/'}><button className="bg-black animate-bounce hover:bg-white hover:text-black duration-700 mt-5 text-white px-3 py-2 rounded-lg">GO HOME</button></Link>
      </div>
    </div>
  );
};
export default ErrorPage;
