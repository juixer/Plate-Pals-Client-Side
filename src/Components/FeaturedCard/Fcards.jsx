import { Card, Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Fcards = ({ food }) => {
  const {
    _id,
    food_name,
    food_image,
    food_quantity,
    food_location,
    food_expire,
    food_note,
    donator_name,
    donator_image,
  } = food;
  return (
    <Card className="rounded-xl hover:shadow-2xl duration-300 hover:-rotate-1 hover:border-green-300 ">
      <div className="space-y-3">
        <div className="flex justify-center items-center">
          <img className="rounded-xl w-96" src={food_image} />
        </div>
        <h5 className="text-2xl ml-5 font-bold tracking-tight text-gray-900 dark:text-white">
          {food_name}
        </h5>
        <div className="ml-5">
          <h1 className="font-medium ">
            <span className="font-bold">Food Quantity:</span> {food_quantity}{" "}
            Person
          </h1>
          <h1 className="font-medium ">
            <span className="font-bold">Pickup Location:</span> {food_location}
          </h1>
          <h1 className="font-medium">
            <span className="font-bold">Expired data:</span> {food_expire}
          </h1>
          <p>
            <span className="font-bold">Note:</span> {food_note}
          </p>
        </div>
        <div className="flex  justify-between items-center">
          <div className="flex items-center gap-4 my-2">
            <img
              src={donator_image}
              className="w-10 rounded-full border h-10 object-contain"
            />
            <h1 className="font-bold ml2 md:text-xl">{donator_name}</h1>
          </div>
          <Link to={`/food/${_id}`}>
            <Button className="h-10" gradientDuoTone="greenToBlue">
              Details
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};
export default Fcards;
