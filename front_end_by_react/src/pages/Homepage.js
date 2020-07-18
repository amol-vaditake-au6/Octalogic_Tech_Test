import React from "react";
import DisplayCars from "../components/CarsItems";
import { connect } from "react-redux";

const Cars = ({ cars }) => {
  console.log("Rendering");
  return cars !== null ? (
    <div
      style={{
        display: "flex",
        direction: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {cars.map((car, index) => (
        <DisplayCars key={index} car={car} index={index} />
      ))}
    </div>
  ) : (
    <h1>Loading</h1>
  );
};

const mapStateToProps = (storeState) => {
  return {
    cars: storeState.cars,
  };
};

export default connect(mapStateToProps)(Cars);
