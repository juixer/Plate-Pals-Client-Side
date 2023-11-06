import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";

import "../Team/team.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const Team = () => {
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setDataLoading(false);
    }, 1000);
    return () => {
      clearTimeout(t);
    };
  }, []);

  const [teams, setTeams] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/teams")
      .then((res) => setTeams(res.data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div data-aos="fade-up-right">
      <h1 className="text-center text-3xl md:text-5xl font-bold">
        Our Volunteer Team
      </h1>
      {dataLoading ? (
        <>
          <div className="flex justify-center items-center gap-16 mt-10">
            <div className="w-96 h-64 bg-op bg-gradient-to-r from-teal-500 to-emerald-300 animate-pulse rounded-xl"></div>
            <div className="w-96 h-64 bg-op bg-gradient-to-r from-teal-500 hidden md:block to-emerald-300 animate-pulse rounded-xl"></div>
            <div className="w-96 h-64 bg-op bg-gradient-to-r from-teal-500 hidden lg:block to-emerald-300 animate-pulse rounded-xl"></div>
          </div>
        </>
      ) : (
        <div className="my-10">
          <Slider {...settings}>
            {teams.map((team) => (
              <TeamCard key={team._id} team={team} />
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};
export default Team;
