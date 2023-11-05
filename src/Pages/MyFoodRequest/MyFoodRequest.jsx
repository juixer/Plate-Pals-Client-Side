import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import FoodRequestCard from "./FoodRequestCard";

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
  console.log(requests);
  return (
    <div className="my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {requests.map((req) => {
          return <FoodRequestCard key={req._id} req={req} />;
        })}
      </div>
    </div>
  );
};
export default MyFoodRequest;
