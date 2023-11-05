import { Button, Select } from "flowbite-react";

const AvailableFoods = () => {

  const handleExpireFood = (e) => {

    const selectedValue = e.target.value;

    if (selectedValue === "short") {

      console.log("Sorting by Soonest to Expire");
    } else if (selectedValue === "long") {
        
      console.log("Sorting by Latest to Expire");
    }else{
        console.log('default');
    }
  };
  return (
    <div className="my-16">
      <div className="max-w-xl mx-auto ">
        <form className="flex justify-center items-center gap-5 flex-col md:flex-row">
          <input
            className="w-full rounded-lg"
            type="text"
            name="search"
            placeholder="Search your food"
          />
          <Button gradientMonochrome="lime" className="font-bold">
            Search
          </Button>
        </form>
      </div>
      <div>
        <form className="flex justify-end">
          <div className="max-w-md">
            <Select onChange={handleExpireFood} name="expire">
              <option value="">Sort Food</option>
              <option value="short">Soonest to Expire</option>
              <option value="long">Latest to Expire</option>
            </Select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AvailableFoods;
