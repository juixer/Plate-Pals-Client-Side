import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";

import '../Team/team.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Team = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {

    fetch('http://localhost:5000/api/teams')
    .then(res => res.json())
    .then(data => setTeams(data))
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
    <div>
      <h1 className="text-center text-3xl md:text-5xl font-bold">
        Our Volunteer Team
      </h1>
      <div className="my-10">
        <Slider {...settings}>
          {teams.map((team, i) => <TeamCard key={i} team={team}/>)}
        </Slider>
      </div>
    </div>
  );
};
export default Team;
