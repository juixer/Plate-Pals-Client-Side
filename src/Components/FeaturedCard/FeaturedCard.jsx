import { Button } from "flowbite-react";
import Fcards from "./Fcards";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const FeaturedCard = () => {
const [featured, setFeatured] = useState([])
  useEffect(() =>{
    axios.get('http://localhost:5000/api/availableFoods')
    .then(res => setFeatured(res.data))
  },[])
  return (
    <div className="space-y-8">
      <h1 className="text-center text-3xl md:text-5xl font-bold">Featured Foods</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10">
        {featured.slice(0,6).map(food => {
          return(
            <Fcards key={food._id} food={food}/>
          )
        })}
      </div>
      <div className="flex justify-center items-center">
        <Link to={"/availableFoods"}>
          {" "}
          <Button className="font-bold" gradientDuoTone="tealToLime">
            See More
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default FeaturedCard;
