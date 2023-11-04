import { Card } from "flowbite-react";
import { FaFacebook, FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
const TeamCard = ({ team }) => {
  const { name, img, position, short_details } = team;
  return (
    <Card className=" duration-300 hover:-rotate-2 hover:shadow-2xl mb-5 hover:border-green-300">
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex flex-col items-center pb-10">
        <img
          height="96"
          src={img}
          width="96"
          className="mb-3 rounded-full shadow-lg"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {name}
        </h5>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {position}
        </span>
        <span className="text-sm text-center text-gray-500 dark:text-gray-400">
          {short_details}
        </span>
        <div className="mt-4 flex space-x-3 lg:mt-2">
          <a
            href="#"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Message
          </a>
        </div>
        <div className="flex  text-3xl gap-3 mt-2">
          <FaFacebook className="text-blue-500 hover:-rotate-12 duration-300" />
          <FaInstagram className="text-orange-500 hover:-rotate-12 duration-300" />
          <FaSquareXTwitter className=" hover:-rotate-12 duration-300" />
        </div>
      </div>
    </Card>
  );
};
export default TeamCard;
