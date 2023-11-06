import { Footer } from "flowbite-react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
const FooTer = () => {
  return (
    <Footer  container className="bg-gray-100">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="/"
              src="https://i.ibb.co/Z69QK90/pngtree-fast-food-logo-png-image-5763171.png"
              name="PlatePals"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="User Resources" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Food Request</Footer.Link>
                <Footer.Link href="#">Food Management</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Quick Links" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                <Footer.Link href="#">F&Q</Footer.Link>
                <Footer.Link href="#">About Us</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <p>Follow Us</p>
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
          </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full flex items-center justify-center">
          <Footer.Copyright href="#" by="All right reserved by PlatePals" year={2023} />
        </div>
      </div>
    </Footer>
  );
};
export default FooTer;
