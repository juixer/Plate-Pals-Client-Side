import Lottie from "lottie-react";
import registerAni from "../../../public/register.json";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="my-16">
      <div className="flex md:flex-row flex-col gap-5 justify-center items-center">
        <div className="w-80 md:w-[400px]">
          <Lottie animationData={registerAni} />
        </div>
        <div className="max-w-xl w-full">
          <h1 className="text-center text-3xl md:text-5xl font-bold">Register</h1>
          <form className="space-y-5">
             {/* input */}
             <div className="space-y-2">
              <h1 className="font-bold">Name</h1>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="w-full rounded-lg"
                autoComplete="name"
              />
            </div>
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
            {/* input */}
            <div className="space-y-2">
              <h1 className="font-bold">Photo URL</h1>
              <input
                type="text"
                name="photo"
                placeholder="Enter Your PhotoURL"
                className="w-full rounded-lg"
                autoComplete="current-password"
              />
            </div>
            <button className="w-full font-bold bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500 py-2 rounded-md">
              Register
            </button>
            <p>
              Already have an account?{" "}
              <Link to={"/login"} className="text-green-600 font-bold">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
