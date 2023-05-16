import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CheckOut = () => {
  const { title, _id, price, img } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const date = from.date.value;
    console.log(name, email, date, price);
    const booking = {
      castomar_name: name,
      email,
      date,
      price,
      img,
      service: title,
      service_id: _id,
    };

    fetch("https://car-doctor-server-ecru-nine.vercel.app/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  console.log(user);
  return (
    <div className="my-20">
      <h1 className="text-center font-bold text-3xl">Book Service: {title} </h1>
      <div>
        <form onSubmit={handleOrderSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                required
                name="name"
                defaultValue={user?.desplyName}
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                required
                name="date"
                placeholder="Date"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="email"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price "
                defaultValue={"$ " + price}
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control  mx-auto mt-6">
            <button className="btn btn-block btn-primary">Order Conferm</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
