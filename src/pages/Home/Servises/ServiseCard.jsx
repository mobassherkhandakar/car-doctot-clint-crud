import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiseCard = ({ servise }) => {
  const {_id, title, img, price } = servise;
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
            <Link to={`/cheakout/${_id}`}>
              <button>
                <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiseCard;
