import { Carousel } from "flowbite-react";
const Banner = () => {
  return (
    <div>
      <div className="h-56 md:h-[500px] lg:h-[700px]">
        <Carousel slideInterval={5000}>
          <div className="w-full relative">
            <img
              src="https://i.ibb.co/Vvdmzt3/slider1.png"
              className="rounded-xl w-full"
              alt="..."
            />
            <div className="absolute top-0 md:bg-black md:bg-opacity-40 w-full md:h-full rounded-xl p-20">
              <div className="absolute bottom-10">
                <h1 className="md:bg-none bg-black md:bg-opacity-0 -ml-5 md:-ml-0 bg-opacity-40 p-2 rounded-lg md:text-7xl font-bold max-w-2xl text-white">
                  Nourishing Communities
                </h1>
                <p className="hidden md:block md:text-xl font-semibold max-w-2xl text-white">
                  Join us in our mission to share surplus food and nourish
                  communities in need. Together, we can make a difference in the
                  fight against food waste.
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

            <div className="absolute top-0 md:bg-black md:bg-opacity-40 w-full md:h-full rounded-xl p-20">
              <div className="absolute bottom-10">
                <h1 className="md:bg-none bg-black md:bg-opacity-0 -ml-5 md:-ml-0 bg-opacity-40 p-2 rounded-lg md:text-7xl font-bold max-w-2xl text-white">
                Sharing the Bounty
                </h1>
                <p className="hidden md:block md:text-xl font-semibold max-w-2xl text-white">
                See how our platform connects donors and recipients to share the bounty of excess food, reducing waste and feeding those who need it most.
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

            <div className="absolute top-0 md:bg-black md:bg-opacity-40 w-full md:h-full rounded-xl p-20">
              <div className="absolute bottom-10">
                <h1 className="md:bg-none bg-black md:bg-opacity-0 -ml-5 md:-ml-0 bg-opacity-40 p-2 rounded-lg md:text-7xl font-bold max-w-2xl text-white">
                Transforming Lives
                </h1>
                <p className="hidden md:block md:text-xl font-semibold max-w-2xl text-white">
                Discover how we are transforming lives by providing access to fresh, wholesome food. Support our cause and help create a hunger-free community.
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

            <div className="absolute top-0 md:bg-black md:bg-opacity-40 w-full md:h-full rounded-xl p-20">
              <div className="absolute bottom-10">
                <h1 className="md:bg-none bg-black md:bg-opacity-0 -ml-5 md:-ml-0 bg-opacity-40 p-2 rounded-lg md:text-7xl font-bold max-w-2xl text-white">
                Volunteer Heroes
                </h1>
                <p className="hidden md:block md:text-xl font-semibold max-w-2xl text-white">
                Meet our dedicated volunteers who work tirelessly to rescue surplus food and ensure it reaches those facing food insecurity. Be a hero, too!
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
export default Banner;
