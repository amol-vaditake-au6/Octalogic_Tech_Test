import React, { Component } from "react";
import { getData } from "../redux/actions/carActions";
import { connect } from "react-redux";

class NavBar extends Component {
  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:1234/car");
      const data = await response.json();
      console.log(data);
      this.props.getData(data);
    } catch (err) {
      console.error(err.message);
    }
  }
  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <>
        <div>
          <nav className="navbar navbar-dark bg-primary">
            <a href="http://localhost:3000" className="navbar-brand">
              CarRents.Com
            </a>
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={this.handleChange}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                style={{ backgroundColor: "#28a745",color:"white" }}
              >
                <b>
                  <em>Search</em>
                </b>
              </button>
            </form>
          </nav>
        </div>
      </>
    );
  }
}

const mapStateToProps = (storeState) => {
  return { cars: storeState.cars };
};
export default connect(mapStateToProps, { getData })(NavBar);
