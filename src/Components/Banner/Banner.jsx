import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import '../Banner/contentloader.css'
const Banner = () => {
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setDataLoading(false);
    }, 1000);
    return () => {
      clearTimeout(t);
    };
  }, []);
  return (
    <div className="my-10">
      {dataLoading ? (
        <div className="flex justify-center items-center">
          <ContentLoader
            speed={1}
            className="rounded-xl responsive-content-loader"
            backgroundColor={"#06b6d4"}
            foregroundColor={"#14b8a6"}
            viewBox="0 0 1200 600"
          >
            <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
          </ContentLoader>
        </div>
      ) : (
        <div className=" md:h-[300px] lg:h-[600px]">
          <Carousel slideInterval={5000}>
            <div className="w-full relative">
              <img
                src="https://i.ibb.co/Vvdmzt3/slider1.png"
                className="rounded-xl w-full"
                alt="..."
              />
              <div className="absolute top-0 bg-black bg-opacity-40 w-full md:h-full rounded-xl p-20">
                <div className="absolute bottom-20">
                  <h1 className=" -ml-8 md:-ml-0 bg-opacity-40 p-2 rounded-lg md:text-5xl lg:text-7xl font-bold max-w-2xl text-white">
                    Nourishing Communities
                  </h1>
                  <p className="hidden md:block md:text-xl font-semibold max-w-2xl text-white">
                    Join us in our mission to share surplus food and nourish
                    communities in need. Together, we can make a difference in
                    the fight against food waste.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full relative">
              <img
                src="https://i.ibb.co/Y4CVVB1/slider3.png"
                className="rounded-xl w-full"
                alt="..."
              />

              <div className="absolute top-0 bg-black bg-opacity-40 w-full md:h-full rounded-xl p-20">
                <div className="absolute bottom-20">
                  <h1 className=" -ml-5 md:-ml-0 bg-opacity-40 p-2 rounded-lg md:text-5xl lg:text-7xl font-bold max-w-2xl text-white">
                    Sharing the Bounty
                  </h1>
                  <p className="hidden md:block md:text-xl font-semibold max-w-2xl text-white">
                    See how our platform connects donors and recipients to share
                    the bounty of excess food, reducing waste and feeding those
                    who need it most.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full relative">
              <img
                src="https://i.ibb.co/9WT8nPh/slider2.png"
                className="rounded-xl w-full"
                alt="..."
              />

              <div className="absolute top-0 bg-black bg-opacity-40 w-full md:h-full rounded-xl p-20">
                <div className="absolute bottom-20">
                  <h1 className=" -ml-5 md:-ml-0 bg-opacity-40 p-2 rounded-lg md:text-5xl lg:text-7xl font-bold max-w-2xl text-white">
                    Transforming Lives
                  </h1>
                  <p className="hidden md:block md:text-xl font-semibold max-w-2xl text-white">
                    Discover how we are transforming lives by providing access
                    to fresh, wholesome food. Support our cause and help create
                    a hunger-free community.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full relative">
              <img
                src="https://i.ibb.co/RPzJNyg/slider4.png"
                className="rounded-xl w-full"
                alt="..."
              />

              <div className="absolute top-0 bg-black bg-opacity-40 w-full md:h-full rounded-xl p-20">
                <div className="absolute bottom-20">
                  <h1 className=" -ml-5 md:-ml-0 bg-opacity-40 p-2 rounded-lg md:text-5xl lg:text-7xl font-bold max-w-2xl text-white">
                    Volunteer Heroes
                  </h1>
                  <p className="hidden md:block md:text-xl font-semibold max-w-2xl text-white">
                    Meet our dedicated volunteers who work tirelessly to rescue
                    surplus food and ensure it reaches those facing food
                    insecurity. Be a hero, too!
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      )}
    </div>
  );
};
export default Banner;
