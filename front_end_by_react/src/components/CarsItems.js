import React from "react";
import { Link } from "react-router-dom";

const DispalyCars = ({ car, index }) => {
  return (
    <div style={{ width: "23%", marginTop: 20 }}>
      <img src={car.imgURL} width="250" height="250" alt="loading"></img>
      <h6>
        <em>Model :{car.name}</em>
      </h6>
      <h6>
        <em>Type :{car.type}</em>
      </h6>
      <h6>Fuel Type :{car.specification[0].fuelType}</h6>
      <h6>Seating Capacity :{car.specification[0].seatingCapacity}</h6>
      <h6>CC :{car.specification[0].cc}</h6>
      <div className="car__buttons">
        <Link to={`detail/${index}`}>
          <button
            style={{
              backgroundColor: "#f1f19f",
              borderRadius: 5,
              border: "solid 2px #f1f19f",
            }}
          >
            <b>Get this one</b>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DispalyCars;
