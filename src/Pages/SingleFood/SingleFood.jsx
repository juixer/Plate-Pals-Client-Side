import { Card, Label, Modal, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData,useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const SingleFood = () => {
  // user
  const { user } = useAuth();
  const food = useLoaderData();
  //   modal
  const [openModal, setOpenModal] = useState(false);
  //   time
  const currentDate = new Date().toLocaleString();
  // navigate 
  const navigate = useNavigate()

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

  const handleFormData = (e) => {
    e.preventDefault();

    const food_status = "pending";
    const requester_name = user?.displayName;
    const requester_image = user?.photoURL;
    const requester_email = user?.email;
    const request_date = e.target.request_date.value;
    const money = e.target.money.value;
    const requester_note = e.target.notes.value;

    const request = {
      food_status,
      requester_name,
      requester_image,
      requester_email,
      request_date,
      money,
      requester_note,
    };
    
    axios
      .patch(`http://localhost:5000/api/request/${_id}`, request)
      .then((res) => {
        console.log(res.data)
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your food has been added",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
      });
  };

  return (
    <Card data-aos="zoom-out-right" className="max-w-5xl mx-auto my-10">
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
            <h5 className="md:text-5xl text-2xl font-bold tracking-tight mt-5 text-gray-900 dark:text-white">
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
            <h1 className="font-medium mb-5">
              <span className="font-bold">Pickup Location:</span>{" "}
              {food_location}
            </h1>
          </div>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-emerald-300 py-2 font-semibold hover:bg-emerald-500 shadow-xl px-3 rounded-lg w-full"
          >
            Request
          </button>
          {/* modal */}
          <Modal data-aos="zoom-out-right" show={openModal} onClose={onCloseModal} popup>
            <Modal.Header />
            <Modal.Body>
              <form className="space-y-5" onSubmit={handleFormData}>
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
                      name="request_date"
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
                      value="Additional Notes"
                    />
                  </div>
                  <Textarea
                    id="comment"
                    placeholder="Enter Your Notes..."
                    name="notes"
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
