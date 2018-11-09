import React, { Component } from "react";
import axios from "axios";

class Wizard extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: 0
    };
  }
  componenetDidMount() {
    axios.get("/api/houses").then(response => {
      this.setState({
        houses: response.data
      });
    });
  }

  handleChange = (val, key) => {
    let obj = {};
    obj[key] = val;
    this.setState(obj);
  };

  addHouse = () => {
    let { name, address, city, state, zip } = this.state;
    axios
      .post("/api/houses", { name, address, city, state, zip })
      .then(response => {
        this.setState({
          houses: response.data,
          name: "",
          address: "",
          city: "",
          state: "",
          zip: ""
        });
      });
  };
  render() {
    let { name, address, city, state, zip } = this.state;
    return (
      <div>
        <input
          value={this.state.name}
          onChange={e => this.handleChange(e.target.value, "name")}
        />
        <input
          value={this.state.address}
          onChange={e => this.handleChange(e.target.value, "address")}
        />
        <input
          value={this.state.city}
          onChange={e => this.handleChange(e.target.value, "city")}
        />
        <input
          value={this.state.state}
          onChange={e => this.handleChange(e.target.value, "state")}
        />
        <input
          value={this.state.zipcode}
          onChange={e => this.handleChange(e.target.value, "zipcode")}
        />
        <button onClick={this.addHouse}>Complete</button>
      </div>
    );
  }
}

export default Wizard;
