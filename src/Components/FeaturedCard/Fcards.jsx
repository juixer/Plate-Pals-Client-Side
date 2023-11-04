import { Card, Button } from "flowbite-react";

const Fcards = () => {
  return (
    <Card className="rounded-xl">
      <div className="space-y-3">
        <div className="flex justify-center items-center">
          <img
            className="w-60"
            src="https://i.ibb.co/0Q5yKgL/apple-watch-9.png"
          />
        </div>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Kacchi Biriani
        </h5>
        <div>
          <h1 className="font-medium text-xl"><span className="font-bold">Food Quantity:</span> 40 Person</h1>
          <h1 className="font-medium text-xl"><span className="font-bold">Pickup Location:</span> Dhaka</h1>
          <h1 className="font-medium text-xl"><span className="font-bold">Expired data:</span> 15-12-23</h1>
          <p>
            <span className="font-bold">Note:</span> Hello from under the
            water.Hello from under the water.Hello from under the water.
          </p>
        </div>
        <div className="flex  justify-between items-center">
          <div className="flex items-center gap-4 my-2">
            <img
              src="https://i.ibb.co/cczNjfw/Allura-Avatar-1.png"
              className="w-10 rounded-full border h-10 object-contain"
            />
            <h1 className="font-bold text-xl">Shanto</h1>
          </div>
          <Button className="h-10" gradientDuoTone="greenToBlue">
            Details
          </Button>
        </div>
      </div>
    </Card>
  );
};
export default Fcards;
