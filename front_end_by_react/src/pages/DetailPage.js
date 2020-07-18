import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class CarDetail extends Component {
  state = {
    days: 0,
    carType: this.props.cars[this.props.match.params.index].type,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state.carType);
  };
  handleRent = (e) => {
    e.preventDefault();
    if (this.state.carType === "suv") {
      alert(
        `Type of Car = SUV Super
            Total Rent of ${this.state.days} days is ${
          this.state.days * 1000
        } Rupees`
      );
    }
    if (this.state.carType === "sedan") {
      if (this.state.days < 3) {
        alert(`Type of Car : Sedan
        Total Rent of ${this.state.days} days is 500 Rupees`);
      } else {
        alert(
          `Type of Car : Sedan
          Total Rent of ${this.state.days} days is ${
            500 + (this.state.days - 3) * 500
          } Rupees`
        );
      }
    }
    if (this.state.carType === "hatchback") {
      if (this.state.days < 5) {
        alert(` Type of Car : HatchBack
          Total Rent of ${this.state.days} days is 500 Rupees`);
      } else {
        alert(
          `Total Rent of ${this.state.days} days is ${
            500 + (this.state.days - 5) * 500
          } Rupees`
        );
      }
    }
  };

  handleForm = (e) => {
    e.preventDefault();
    document.querySelector(`#carRent`).style.display = "block";
  };
  render() {
    const car = this.props.cars[this.props.match.params.index];
    return car !== null ? (
      <div>
        <img
          src={car.imgURL}
          alt="loaidng"
          style={{ width: 500, height: 300, marginTop: 50 }}
        ></img>
        <h6>
          <em>Model :{car.name}</em>
        </h6>
        <h6>
          <em>Type :{car.type}</em>
        </h6>
        <h6>Fuel Type :{car.specification[0].fuelType}</h6>
        <h6>Seating Capacity :{car.specification[0].seatingCapacity}</h6>
        <h6>CC :{car.specification[0].cc}</h6>
        <button
          style={{
            backgroundColor: "#f1f19f",
            borderRadius: 5,
            border: "solid 2px #f1f19f",
          }}
          onClick={this.handleForm}
        >
          <b>Get the quotation</b>
        </button>
        <form
          id="carRent"
          style={{ display: "none" }}
          onSubmit={this.handleRent}
        >
          <b>
            <em>Days : </em>
          </b>
          <input
            type="number"
            onChange={this.handleChange}
            name="days"
            min={1}
            value={this.state.days}
          />
          <input type="submit" value="Get the Amount" />
        </form>
      </div>
    ) : (
      <Redirect to="/" />
    );
  }
}

const mapStateToProps = (storeState) => {
  return { cars: storeState.cars };
};
export default connect(mapStateToProps)(CarDetail);
