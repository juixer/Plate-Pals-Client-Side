import { Label, TextInput, Textarea } from "flowbite-react";
import Lottie from "lottie-react";

import addFoodAni from "../../../public/addfood.json";
const AddFood = () => {
  const handleFormData = (e) => {
    e.preventDefault();
    const form = e.target;

    const food_name = form.name.value;
    const food_image = form.image.value;
    const food_quantity = form.quantity.value;
    const food_location = form.location.value;
    const food_expire = form.expire.value;
    const food_note = form.note.value;
    const food_status = "available";

    const foodInfo = {
      food_name,
      food_image,
      food_quantity,
      food_location,
      food_expire,
      food_note,
      food_status,
    };
    console.log(foodInfo);
  };
  return (
    <div className="my-16">
      <div className="flex md:flex-row flex-col gap-5 justify-center items-center">
        <div>
          <Lottie animationData={addFoodAni} />
        </div>
        <div className="max-w-xl mx-auto w-full">
          <h1 className="text-center text-3xl md:text-5xl font-bold mb-5">
            Add Food
          </h1>
          <form className="space-y-5" onSubmit={handleFormData}>
            {/* input */}
            <div>
              <div className="mb-2 block">
                <Label
                  className="text-xl"
                  htmlFor="food_name"
                  value="Food Name"
                />
              </div>
              <TextInput
                id="food_name"
                type="name"
                name="name"
                placeholder="Enter Your Food Name"
                required
                shadow
              />
            </div>
            {/* input */}
            <div>
              <div className="mb-2 block">
                <Label
                  className="text-xl"
                  htmlFor="food_image"
                  value="Food Image URL"
                />
              </div>
              <TextInput
                id="food_image"
                type="text"
                name="image"
                placeholder="Enter Your Food Image URL"
                required
                shadow
              />
            </div>
            {/* input */}
            <div>
              <div className="mb-2 block">
                <Label
                  className="text-xl"
                  htmlFor="food_quantity"
                  value="Food Quantity"
                />
              </div>
              <TextInput
                id="food_quantity"
                type="number"
                name="quantity"
                placeholder="Enter Food Person Quantity"
                required
                shadow
              />
            </div>
            {/* input */}
            <div>
              <div className="mb-2 block">
                <Label
                  className="text-xl"
                  htmlFor="food_location"
                  value="Pickup Location"
                />
              </div>
              <TextInput
                id="food_location"
                type="text"
                name="location"
                placeholder="Enter Pickup Location"
                required
                shadow
              />
            </div>
            {/* input */}
            <div>
              <div className="mb-2 block">
                <Label
                  className="text-xl"
                  htmlFor="food_expire"
                  value="Expire Date"
                />
              </div>
              <TextInput
                id="food_expire"
                name="expire"
                type="date"
                required
                shadow
              />
            </div>
            {/* input */}
            <div>
              <div className="mb-2 block">
                <Label
                  className="text-xl"
                  htmlFor="comment"
                  value="Add Notes"
                />
              </div>
              <Textarea
                id="comment"
                placeholder="Enter Your Notes..."
                required
                name="note"
                rows={4}
              />
            </div>
            <button className="w-full font-bold bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500 py-2 rounded-md">
              Add Food
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddFood;
