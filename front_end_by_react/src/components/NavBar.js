import React, { Component } from "react";
import { getData } from "../redux/actions/carActions";
import { connect } from "react-redux";

class NavBar extends Component {
  state = {
    search: "pizza",
  };

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
              Carrents.Com
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
              >
                Search
              </button>
            </form>
          </nav>
        </div>
        <div>
          {this.props.cars === null ? (
            <h3>Loading</h3>
          ) : (
            <div
              style={{
                background: "#d48888",
                width: 500,
                hight: 200,
                margin: "auto",
                marginTop: 50,
                padding: 50,
              }}
            >
              <b>
                <em>{this.props.cars}</em>
              </b>
            </div>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (storeState) => {
  return { cars: storeState.cars };
};
export default connect(mapStateToProps, { getData })(NavBar);
