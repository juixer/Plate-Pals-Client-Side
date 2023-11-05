import { Card, Label, Modal, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router";
import useAuth from "../../Hooks/useAuth";

const SingleFood = () => {
  // user
    const{user} = useAuth()
  const food = useLoaderData();
  //   modal
  const [openModal, setOpenModal] = useState(false);
  //   time
  const currentDate = new Date().toLocaleString();

  function onCloseModal() {
    setOpenModal(false);
  }

  const {
    _id,
    food_name,
    food_image,
    food_quantity,
    food_location,
    food_expire,
    food_note,
    donator_name,
    donator_image,
    donator_email,
  } = food;
  return (
    <Card className="max-w-5xl mx-auto my-10">
      <Helmet>
        <title>PlatePals | {food_name}</title>
      </Helmet>
      <div className="flex md:flex-row flex-col gap-5 items-center">
        <div>
          <img
            className="md:rounded-l-xl md:rounded-r-none rounded-xl"
            src={food_image}
          />
        </div>
        <div className="space-y-2">
          <h5 className="md:text-5xl tex-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Food Details
          </h5>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {food_name}
          </h5>
          <h1 className="font-medium">
            <span className="font-bold">Food Quantity:</span> {food_quantity}{" "}
            Person
          </h1>
          <h1 className="font-medium">
            <span className="font-bold">Expired data:</span> {food_expire}
          </h1>
          <p>
            <span className="font-bold">Note:</span> {food_note}
          </p>
          <div>
            <h5 className="md:text-5xl text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Donor Information
            </h5>
            <div className="flex items-center gap-4 my-2">
              <img
                src={donator_image}
                className="w-10 rounded-full border h-10 object-contain"
              />
              <h1 className="font-bold ml-2 text-base md:text-xl">
                {donator_name}
              </h1>
            </div>
            <h1 className="font-medium">
              <span className="font-bold">Pickup Location:</span>{" "}
              {food_location}
            </h1>
          </div>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-emerald-300 py-2 px-3 rounded-lg"
          >
            Request
          </button>
          {/* modal */}
          <Modal show={openModal} onClose={onCloseModal} popup>
            <Modal.Header />
            <Modal.Body>
              <form className="space-y-5">
                {/* input */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                      defaultValue={food_name}
                      shadow
                      readOnly
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
                      defaultValue={food_image}
                      shadow
                      readOnly
                    />
                  </div>
                </div>

                {/* input */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <div className="mb-2 block">
                      <Label
                        className="text-xl"
                        htmlFor="food_id"
                        value="Food ID"
                      />
                    </div>
                    <TextInput
                      id="food_id"
                      type="text"
                      name="text"
                      defaultValue={_id}
                      shadow
                      readOnly
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
                      defaultValue={food_location}
                      shadow
                      readOnly
                    />
                  </div>
                </div>
                {/* input */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                      defaultValue={food_expire}
                      shadow
                      readOnly
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label
                        className="text-xl"
                        htmlFor="food_request"
                        value="Request Date"
                      />
                    </div>
                    <TextInput
                      id="food_request"
                      name="request"
                      type="text"
                      defaultValue={currentDate}
                      shadow
                      readOnly
                    />
                  </div>
                </div>
                {/* input */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <div className="mb-2 block">
                      <Label
                        className="text-xl"
                        htmlFor="donator_name"
                        value="Donator Name"
                      />
                    </div>
                    <TextInput
                      id="donator_name"
                      name="donator_name"
                      type="text"
                      defaultValue={donator_name}
                      shadow
                      readOnly
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label
                        className="text-xl"
                        htmlFor="donator_email"
                        value="Donator Email"
                      />
                    </div>
                    <TextInput
                      id="donator_email"
                      type="email"
                      name="email"
                      defaultValue={donator_email}
                      shadow
                      readOnly
                    />
                  </div>
                </div>
                {/* input */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <div className="mb-2 block">
                      <Label
                        className="text-xl"
                        htmlFor="your_email"
                        value="Your Email"
                      />
                    </div>
                    <TextInput
                      id="your_email"
                      name="your_email"
                      type="email"
                      defaultValue={user?.email}
                      shadow
                      readOnly
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label
                        className="text-xl"
                        htmlFor="donate_money"
                        value="Donate Money"
                      />
                    </div>
                    <TextInput
                      id="donate_money"
                      type="number"
                      name="money"
                      shadow
                      placeholder="Donate If you want"
                    />
                  </div>
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
                    defaultValue={food_note}
                    name="note"
                    rows={4}
                  />
                </div>
                <button className="w-full font-bold bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500 py-2 rounded-md">
                  Request Food
                </button>
              </form>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </Card>
  );
};

export default SingleFood;
