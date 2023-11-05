import axios from "axios";
import { Select } from "flowbite-react";
import { useEffect, useState } from "react";
import AvailableFoodCard from "./AvailableFoodCard";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
// search
  const handleSearch = e => {
    e.preventDefault();
    const name = e.target.search.value;
    axios.get(`http://localhost:5000/api/foods?name=${name}`)
    .then(res => setFoods(res.data))
  }
// sort 
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
        <form onSubmit={handleSearch} className="flex justify-center items-center gap-5 flex-col md:flex-row">
          <input
            className="w-full rounded-lg"
            type="text"
            name="search"
            placeholder="Search your food"
          />
          <button className="font-bold bg-emerald-300 px-3 py-2  rounded-lg">
            Search
          </button>
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
