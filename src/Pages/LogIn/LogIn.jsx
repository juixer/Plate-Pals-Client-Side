import Lottie from "lottie-react";
import loginAni from "../../../public/login.json";
import {  FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const LogIn = () => {
  const { googleLogin, signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation()

  const handleFormData = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    
    signIn(email, password)
    .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location.state ? location?.state : "/")
      })
      .catch((err) =>
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 1500,
        })
      );
    
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location.state ? location?.state : "/")
      })
      .catch((err) =>
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 1500,
        })
      );
  };

  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01]
    }}>
      <Helmet><title>PlatePals | LogIn</title></Helmet>
      <div className="flex md:flex-row flex-col gap-5 justify-center items-center">
        <div>
          <Lottie animationData={loginAni} loop={false}/>
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
            <button
              onClick={handleGoogleLogin}
              className="bg-green-300 bg-opacity-50 px-4 py-2 rounded-lg hover:bg-emerald-300"
            >
              <FaGoogle className="text-3xl" />
            </button>
           
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default LogIn;
