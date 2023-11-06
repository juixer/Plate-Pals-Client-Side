import axios from "axios";
import { Label, TextInput, Textarea } from "flowbite-react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const UpdateFood = () => {
  const food = useLoaderData();
  const navigate = useNavigate();
  const handleFormData = (e) => {
    e.preventDefault();
    const form = e.target;

    const food_name = form.name.value;
    const food_image = form.image.value;
    const food_quantity = form.quantity.value;
    const food_location = form.location.value;
    const food_expire = form.expire.value;
    const food_note = form.note.value;

    const update = {
      food_name,
      food_image,
      food_quantity,
      food_location,
      food_expire,
      food_note,
    };

    axios
      .put(`https://platepals.vercel.app/api/myFood/${food._id}`, update)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Food Updated",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      });
  };
  return (
    <motion.div
      className="my-16"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Helmet>
        <title>PlatePals | Update Food</title>
      </Helmet>
      <div className="flex md:flex-row flex-col gap-5 justify-center items-center">
        <div className="max-w-xl mx-auto w-full">
          <h1 className="text-center text-3xl md:text-5xl font-bold mb-5">
            Update Food
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
                defaultValue={food?.food_name}
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
                defaultValue={food?.food_image}
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
                defaultValue={food?.food_quantity}
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
                defaultValue={food?.food_location}
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
                defaultValue={food?.food_expire}
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
                defaultValue={food?.food_note}
                name="note"
                rows={4}
              />
            </div>
            <button className="w-full font-bold bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500 py-2 rounded-md">
              Update Food
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default UpdateFood;
