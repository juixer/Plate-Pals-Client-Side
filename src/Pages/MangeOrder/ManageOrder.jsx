import axios from "axios";
import { Card } from "flowbite-react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ManageOrder = () => {
  const order = useLoaderData();
  const navigate = useNavigate()
  const {
    _id,
    request_date,
    requester_email,
    requester_image,
    requester_name,
    money,
    food_note,
    food_image,
    food_status,
    food_name,
  } = order;
  

  const handleDeliverButton = () => {
    const delivered = {
        food_status: 'delivered'
    };

    axios.patch(`http://localhost:5000/api/delivery/${_id}`, delivered)
    .then(res => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Food on the way to Requester",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(-1);
    })
  }
  return (
    <div className="flex max-w-3xl mx-auto justify-center items-center my-16 lg:h-[450px]">
      <Card className="w-full">
        <div className="flex justify-end px-4 pt-4"></div>
        <div className={`${food_status !== 'available' ? "flex flex-col md:flex-row items-center pb-10 gap-10" : ""}`}>
          <div className="flex flex-col items-center">
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
            <span className="text-sm text-gray-500 dark:text-gray-400 max-w-xs text-center">
              {food_note}
            </span>
            <p className="text-lg font-semibold text-gray-500 dark:text-gray-400">
              Food Status: {food_status}
            </p>
          </div>
          {food_status !== "available" ? (
            <div className="mt-4 flex space-x-3 lg:mt-6">
              <div className="flex flex-col justify-center items-center space-y-2">
                <img src={requester_image} className="rounded-full" />
                <h1>
                  Requester Name:
                  <span className="font-bold ml-2">{requester_name}</span>
                </h1>
                <h1>
                  Requester Email:
                  <span className="font-bold ml-2">{requester_email}</span>
                </h1>
                <h1>
                  Request Time:
                  <span className="font-bold ml-2">{request_date}</span>
                </h1>
                <h1>
                  Wants to Donate:
                  <span className="font-bold ml-2">{money}</span>
                  BDT
                </h1>
                <div>
                    {food_status === 'delivered' ? <button onClick={handleDeliverButton} className={`bg-emerald-300 py-2 px-3 rounded-lg font-semibold hover:cursor-not-allowed`} disabled>
                    Donated
                  </button> : <button onClick={handleDeliverButton} className={`bg-emerald-300 py-2 px-3 rounded-lg font-semibold`}>
                    Donate
                  </button> }
                  
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </Card>
    </div>
  );
};

export default ManageOrder;
