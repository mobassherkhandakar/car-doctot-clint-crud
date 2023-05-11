import React, { useEffect, useState } from "react";
import ServiseCard from "./ServiseCard";

const Servises = () => {
  const [service,setService] = useState([])
  useEffect(()=>{
    fetch('service.json')
    .then(res=> res.json())
    .then(data=> setService(data))
  },[])
  return (
    <div className="my-5">
      <div className="text-center space-y-4">
        <h2 className="text-3xl text-orange-600">Popular Products</h2>
        <p className="text-5xl font-bold">Browse Our Products</p>
        <p className="pb-10">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mb-5 lg:grid-cols-3 gap-5">
        {
          service.map(servise=> <ServiseCard key={servise._id} servise={servise}/>)
        }
      </div>
    </div>
  );
};

export default Servises;
