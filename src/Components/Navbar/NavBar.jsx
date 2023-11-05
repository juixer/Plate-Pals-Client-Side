import { Link } from "react-router-dom";
import { Button, Navbar } from "flowbite-react";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const [toggle, setToggle] = useState(true);

  const handleDropDown = () => {
    setToggle(!toggle);
  };

  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logout Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="mt-5">
      <Navbar fluid rounded>
        <Link to={'/'} className="flex">
            <img
              src="https://i.ibb.co/Z69QK90/pngtree-fast-food-logo-png-image-5763171.png"
              className="mr-3 h-6 sm:h-9"
              alt="PlatePal Logo"
            />
            <span className="md:hidden lg:block self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              <span className="text-green-500">P</span>late
              <span className="text-green-500">P</span>als
            </span>
        </Link>
        <div className="flex md:order-2">
          {user ? (
            <div className="relative">
              <img
                onClick={handleDropDown}
                src={user?.photoURL}
                className="w-12 h-12 cursor-pointer rounded-full"
              />
              <div
                className={`${
                  toggle ? "hidden" : "inline"
                } space-y-2 bg-gray-100 p-4 absolute  right-1 top-16 rounded-xl z-50`}
              >
                <h1 className="font-bold">{user?.displayName}</h1>
                <h1 className="font-medium">{user?.email}</h1>
                <Button
                  onClick={handleSignOut}
                  className="font-bold w-full bg-emerald-500"
                >
                  Log Out
                </Button>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <Button className="font-bold" gradientDuoTone="greenToBlue">
                Log In
              </Button>
            </Link>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link
            to="/"
            className="font-semibold lg:text-xl   hover:text-green-500"
          >
            Home
          </Link>
          <Link
            to="/availableFoods"
            className="font-semibold lg:text-xl  hover:text-green-500"
          >
            Available Foods
          </Link>
          {user ? (
            <>
              <Link
                to="/addFood"
                className="font-semibold lg:text-xl  hover:text-green-500"
              >
                Add Food
              </Link>
              <Link
                to="/manageFood"
                className="font-semibold lg:text-xl  hover:text-green-500"
              >
                Manage My Foods
              </Link>
              <Link
                to="/foodRequest"
                className="font-semibold lg:text-xl  hover:text-green-500"
              >
                My Food Request
              </Link>
            </>
          ) : (
            ""
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default NavBar;
