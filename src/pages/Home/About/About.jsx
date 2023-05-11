import React from "react";
import parson from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-[560px] my-10 bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img src={parson} className=" rounded-lg shadow-2xl" />
          <img
            src={parts}
            className=" absolute -bottom-10 w-1/2 border-8 border-white -right-10 rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-1/2 ms-10 space-y-3">
          <h1 className="text-3xl  font-bold text-orange-600">About</h1>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-active bg-[#FF3811] mr-5">Get More info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
