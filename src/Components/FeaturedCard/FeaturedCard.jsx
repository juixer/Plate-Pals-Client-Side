import { Button } from "flowbite-react";
import Fcards from "./Fcards";
import { Link } from "react-router-dom";

const FeaturedCard = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-center text-3xl md:text-5xl font-bold">Featured Foods</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Fcards />
        <Fcards />
        <Fcards />
        <Fcards />
        <Fcards />
        <Fcards />
      </div>
      <div className="flex justify-center items-center">
        <Link to={"/availableFoods"}>
          {" "}
          <Button className="font-bold" gradientDuoTone="tealToLime">
            See More
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default FeaturedCard;
