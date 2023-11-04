import { Label, TextInput, Textarea } from "flowbite-react";
const AddFood = () => {
    const handleFormData = e => {
        e.preventDefault();
        const form = e.target;

        const food_name = form.name.value;
        console.log(food_name);
    }
  return (
    <div className="my-16">
      <h1 className="text-center text-3xl md:text-5xl font-bold">Add Food</h1>
      <div className="max-w-2xl mx-auto">
        <form className="space-y-5" onSubmit={handleFormData}>
          {/* input */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="food_name" value="Food Name" />
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
              <Label htmlFor="food_image" value="Food Image URL" />
            </div>
            <TextInput
              id="food_image"
              type="text"
              placeholder="Enter Your Food Image URL"
              required
              shadow
            />
          </div>
          {/* input */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="food_quantity" value="Food Quantity" />
            </div>
            <TextInput
              id="food_quantity"
              type="number"
              placeholder="Enter Food Person Quantity"
              required
              shadow
            />
          </div>
          {/* input */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="food_location" value="Pickup Location" />
            </div>
            <TextInput
              id="food_location"
              type="text"
              placeholder="Enter Pickup Location"
              required
              shadow
            />
          </div>
          {/* input */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="food_expire" value="Expire Date" />
            </div>
            <TextInput id="food_expire" type="date" required shadow />
          </div>
          {/* input */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Add Notes" />
            </div>
            <Textarea
              id="comment"
              placeholder="Enter Your Notes..."
              required
              rows={4}
            />
          </div>
          <button className="w-full font-bold bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500 py-2 rounded-md">Add Food</button>
        </form>
      </div>
    </div>
  );
};
export default AddFood;
