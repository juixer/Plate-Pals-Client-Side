import axios from "axios";
import { Select } from "flowbite-react";
import { useEffect, useState } from "react";
import AvailableFoodCard from "./AvailableFoodCard";
import { Helmet } from "react-helmet-async";

const AvailableFoods = () => {
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setDataLoading(false);
    }, 1000);
    return () => {
      clearTimeout(t);
    };
  }, []);

  const [foods, setFoods] = useState([]);
  // search
  const handleSearch = (e) => {
    e.preventDefault();
    const name = e.target.search.value;
    axios
      .get(`http://localhost:5000/api/foods?name=${name}`)
      .then((res) => setFoods(res.data));
  };
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
    <div data-aos="zoom-out-right" className="my-16">
      <Helmet>
        <title>PlatePals | Available Foods</title>
      </Helmet>
      <div className="max-w-xl mx-auto ">
        <form
          onSubmit={handleSearch}
          className="flex justify-center items-center gap-5 flex-col md:flex-row"
        >
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

      <div className="my-10">
        <h1 className="text-center text-3xl md:text-5xl font-bold">
          Food Available: {foods.length}
        </h1>
        <div className="mt-8">
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
        {dataLoading ? (
          <>
            <div className="flex justify-center items-center gap-16 mt-10">
              <div className="w-64 h-96 bg-op bg-gradient-to-r from-teal-500 to-emerald-300 animate-pulse rounded-xl"></div>
              <div className="w-64 h-96 bg-op bg-gradient-to-r from-teal-500 hidden md:block to-emerald-300 animate-pulse rounded-xl"></div>
              <div className="w-64 h-96 bg-op bg-gradient-to-r from-teal-500 hidden lg:block to-emerald-300 animate-pulse rounded-xl"></div>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10 mt-10">
            {foods.map((food) => {
              return <AvailableFoodCard key={food._id} food={food} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AvailableFoods;
