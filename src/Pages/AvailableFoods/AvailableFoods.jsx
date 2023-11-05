import axios from "axios";
import { Button, Select } from "flowbite-react";
import { useEffect, useState } from "react";
import AvailableFoodCard from "./AvailableFoodCard";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);

  const handleExpireFood = (e) => {
    const selectedValue = e.target.value;

    if (selectedValue === "short") {
      axios
        .get("http://localhost:5000/api/foodsExpireDataShort")
        .then((res) => setFoods(res.data));
    } else if (selectedValue === "long") {
      axios
        .get("http://localhost:5000/api/foodsExpireDataLong")
        .then((res) => setFoods(res.data));
    } else {
      axios
        .get("http://localhost:5000/api/availableFoods")
        .then((res) => setFoods(res.data));
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/availableFoods")
      .then((res) => setFoods(res.data));
  }, []);
  return (
    <div className="my-16">
      <div className="max-w-xl mx-auto ">
        <form className="flex justify-center items-center gap-5 flex-col md:flex-row">
          <input
            className="w-full rounded-lg"
            type="text"
            name="search"
            placeholder="Search your food"
          />
          <Button gradientMonochrome="lime" className="font-bold">
            Search
          </Button>
        </form>
      </div>
      <div>
        <form className="flex justify-end">
          <div className="max-w-md">
            <Select onChange={handleExpireFood} name="expire">
              <option value="">Default Sorted Food</option>
              <option value="short">Soonest to Expire</option>
              <option value="long">Latest to Expire</option>
            </Select>
          </div>
        </form>
      </div>
      <div>
        <h1 className="text-center text-3xl md:text-5xl font-bold">
          Food Available: {foods.length}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10 mt-10">
          {foods.map((food) => {
            return <AvailableFoodCard key={food._id} food={food} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AvailableFoods;
