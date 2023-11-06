import { Button } from "flowbite-react";
import Fcards from "./Fcards";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ContentLoader from "react-content-loader";

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
      .get("http://localhost:5000/api/availableFoods")
      .then((res) => setFeatured(res.data));
  }, []);
  return (
    <div className="space-y-8">
      <h1 className="text-center text-3xl md:text-5xl font-bold">
        Featured Foods
      </h1>
      {dataLoading ? (
        <div className="flex justify-center items-center">
          <ContentLoader
            speed={1}
            className="rounded-xl responsive-content-loader"
            backgroundColor={"#06b6d4"}
            foregroundColor={"#14b8a6"}
            viewBox="0 0 1200 300"
          >
            <rect x="10" y="0%" rx="5" ry="5" width="20%" height="90%" />
            <rect x="33%" y="0%" rx="5" ry="5" width="20%" height="90%" />
            <rect x="66%" y="0%" rx="5" ry="5" width="20%" height="90%" />
          </ContentLoader>
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
