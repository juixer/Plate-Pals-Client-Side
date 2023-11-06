import { Button } from "flowbite-react";
import Fcards from "./Fcards";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const FeaturedCard = () => {
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setDataLoading(false);
    }, 1000);
    return () => {
      clearTimeout(t);
    };
  }, []);

  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    axios
      .get("https://platepals-juixers-projects.vercel.app/api/availableFoods")
      .then((res) => setFeatured(res.data));
  }, []);
  return (
    <div data-aos="zoom-out-right" className="space-y-8">
      <h1 className="text-center text-3xl md:text-5xl font-bold">
        Featured Foods
      </h1>
      {dataLoading ? (
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center gap-16 mt-10">
            <div className="w-64 h-96 bg-op bg-gradient-to-r from-teal-500 to-emerald-300 animate-pulse rounded-xl"></div>
            <div className="w-64 h-96 bg-op bg-gradient-to-r from-teal-500 hidden md:block to-emerald-300 animate-pulse rounded-xl"></div>
            <div className="w-64 h-96 bg-op bg-gradient-to-r from-teal-500 hidden lg:block to-emerald-300 animate-pulse rounded-xl"></div>
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10">
            {featured.slice(0, 6).map((food) => {
              return <Fcards key={food._id} food={food} />;
            })}
          </div>
          <div className="flex justify-center items-center">
            <Link to={"/availableFoods"}>
              {" "}
              <Button
                className="font-bold shadow-xl"
                gradientDuoTone="tealToLime"
              >
                See More
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
export default FeaturedCard;
