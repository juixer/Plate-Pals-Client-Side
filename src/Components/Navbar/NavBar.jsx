import { Link, NavLink } from "react-router-dom";
import { Button, Navbar } from 'flowbite-react';

const NavBar = () => {
  return (
    <div>
      <Navbar fluid rounded>
      <Navbar.Brand>
        <img src="https://i.ibb.co/Z69QK90/pngtree-fast-food-logo-png-image-5763171.png" className="mr-3 h-6 sm:h-9" alt="PlatePal Logo" />
        <span className="md:hidden lg:block self-center whitespace-nowrap text-xl font-semibold dark:text-white"><span className="text-green-500">P</span>late<span className="text-green-500">P</span>als</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link to={'/login'}><Button className="font-bold bg-emerald-500 lg:mt-0 mr-2">Log In</Button></Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link>
          <NavLink className="font-semibold lg:text-xl hover:border-b-2 hover:border-green-600 " to={'/'}>Home</NavLink>
        </Navbar.Link>
        <Navbar.Link><NavLink className="font-semibold lg:text-xl hover:border-b-2 hover:border-green-600 " to={'/availableFoods'}>Available Foods</NavLink></Navbar.Link>
        <Navbar.Link><NavLink className="font-semibold lg:text-xl hover:border-b-2 hover:border-green-600 " to={'/addFood'}>Add Food</NavLink></Navbar.Link>
        <Navbar.Link><NavLink className="font-semibold lg:text-xl hover:border-b-2 hover:border-green-600 " to={'/manageFood'}>Manage My Foods</NavLink></Navbar.Link>
        <Navbar.Link><NavLink className="font-semibold lg:text-xl hover:border-b-2 hover:border-green-600 " to={'/foodRequest'}>My Food Request</NavLink></Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
};
export default NavBar;
