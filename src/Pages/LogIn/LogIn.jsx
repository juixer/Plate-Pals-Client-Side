import Lottie from "lottie-react";
import loginAni from "../../../public/login.json";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
const LogIn = () => {
  const handleFormData = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="flex md:flex-row flex-col gap-5 justify-center items-center">
        <div>
          <Lottie animationData={loginAni} />
        </div>
        <div className="max-w-xl w-full">
          <h1 className="text-center text-3xl md:text-5xl font-bold">Log In</h1>
          <form className="space-y-5" onSubmit={handleFormData}>
            {/* input */}
            <div className="space-y-2">
              <h1 className="font-bold">Email</h1>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="w-full rounded-lg"
                autoComplete="email"
              />
            </div>
            {/* input */}
            <div className="space-y-2">
              <h1 className="font-bold">Password</h1>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="w-full rounded-lg"
                autoComplete="current-password"
              />
            </div>
            <button className="w-full font-bold bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500 py-2 rounded-md">
              Log In
            </button>
            <p>
              Do not have and Account?{" "}
              <Link to={"/register"} className="text-green-600 font-bold">
                Register
              </Link>
            </p>
          </form>
          <div className="flex gap-5 mt-5 justify-center items-center">
            <button className="bg-green-300 bg-opacity-50 px-4 py-2 rounded-lg hover:bg-emerald-300">
              <FaGoogle className="text-3xl" />
            </button>
            <button className="bg-green-300 bg-opacity-50 px-4 py-2 rounded-lg hover:bg-emerald-300">
              <FaGithub className="text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogIn;