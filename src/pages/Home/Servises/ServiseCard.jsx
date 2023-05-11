import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServiseCard = ({ servise }) => {
  const { title, img, price } = servise;
  return (
    <div>
      <div className="card card-compact w-96 h-full bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Price: ${price}</p>
          <div className="card-actions justify-end">
            <button className="">
              {" "}
              <FaArrowRight />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiseCard;
