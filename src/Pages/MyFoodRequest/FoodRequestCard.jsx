import axios from "axios";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const FoodRequestCard = ({ req }) => {
  const navigate = useNavigate();
  const {
    _id,
    food_image,
    food_name,
    donator_name,
    food_location,
    food_expire,
    request_date,
    money,
    food_status,
  } = req;

  const handleCancel = (id) => {
    const money = "";
    const food_status = "available";
    const request_date = "";
    const requester_email = "";
    const requester_image = "";
    const requester_name = "";

    const cancel = {
      money,
      food_status,
      request_date,
      requester_email,
      requester_image,
      requester_name,
    };
    axios
      .patch(
        `https://platepals-juixers-projects.vercel.app/api/request/${id}`,
        cancel
      )
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your food request has been canceled",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/availableFoods");
      });
  };
  return (
    <Card data-aos="zoom-out-right" className="max-w-sm">
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex flex-col items-center pb-10">
        <img
          alt={food_name}
          height="96"
          src={food_image}
          width="96"
          className="mb-3 rounded-full shadow-lg"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {food_name}
        </h5>
        <div className="space-y-1 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Donar Name: <span className="font-semibold"> {donator_name}</span>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Pickup Location:{" "}
            <span className="font-semibold"> {food_location}</span>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Expire Date: <span className="font-semibold"> {food_expire}</span>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Request Date: <span className="font-semibold"> {request_date}</span>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Donate Amount:{" "}
            <span className="font-semibold"> {money ? money : 0}</span>BDT
          </p>
        </div>
        <div className="mt-4 flex justify-center items-center flex-col space-x-3 lg:mt-6 space-y-1">
          <h5 className="mb-1 font-medium text-gray-900 dark:text-white">
            Status: {food_status}
          </h5>
          {food_status === "available" || food_status === "pending" ? (
            <button
              onClick={() => handleCancel(_id)}
              className="px-3 py-2 text-white bg-red-500 rounded-lg"
            >
              Cancel
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </Card>
  );
};

export default FoodRequestCard;
