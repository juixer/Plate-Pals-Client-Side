import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import FoodRequestCard from "./FoodRequestCard";
import updateAni from "../../../public/update.json";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";

const MyFoodRequest = () => {
  const [requests, setRequests] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/myRequest/${user.email}`)
      .then((res) => {
        setRequests(res.data);
      });
  }, [user.email]);
  return (
    <div className="my-16">
      <Helmet><title>PlatePals | Food Request</title></Helmet>
      {requests.length === 0 ? (
        <div className="max-w-2xl mx-auto">
          <h1 className="text-center text-3xl md:text-5xl font-bold mb-5">
            No food requests have been made yet
          </h1>
          <Lottie animationData={updateAni} loop={true} />
        </div>
      ) : (
        <div>
          <h1 className="text-center text-3xl md:text-5xl font-bold mb-5">
          Food Requests
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {requests.map((req) => {
              return <FoodRequestCard key={req._id} req={req} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default MyFoodRequest;
