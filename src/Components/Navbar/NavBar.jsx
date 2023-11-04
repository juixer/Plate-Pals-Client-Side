import { Link } from "react-router-dom";
import { Button, Navbar } from "flowbite-react";

const NavBar = () => {
  return (
    <div className="mt-5">
      <Navbar fluid rounded>
        <Navbar.Brand>
          <img
            src="https://i.ibb.co/Z69QK90/pngtree-fast-food-logo-png-image-5763171.png"
            className="mr-3 h-6 sm:h-9"
            alt="PlatePal Logo"
          />
          <span className="md:hidden lg:block self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            <span className="text-green-500">P</span>late
            <span className="text-green-500">P</span>als
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Link to="/login">
            <Button className="font-bold" gradientDuoTone="greenToBlue">
              Log In
            </Button>
          </Link>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link to="/" className="font-semibold lg:text-xl   hover:text-green-500">
            Home
          </Link>
          <Link to="/availableFoods" className="font-semibold lg:text-xl  hover:text-green-500">
            Available Foods
          </Link>
          <Link to="/addFood" className="font-semibold lg:text-xl  hover:text-green-500">
            Add Food
          </Link>
          <Link to="/manageFood" className="font-semibold lg:text-xl  hover:text-green-500">
            Manage My Foods
          </Link>
          <Link to="/foodRequest" className="font-semibold lg:text-xl  hover:text-green-500">
            My Food Request
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default NavBar;
