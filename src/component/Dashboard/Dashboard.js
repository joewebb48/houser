import React, { Component } from "react";
import House from "../House/House";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      houses: []
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    axios.get(`/api/houses/${id}`).then(response => {
      let house = response.data[0];
      this.setState({ house });
    });
  }
  delete = () => {
    let { id } = this.state.housesaxios
      .delete(`/api/houses/${id}`)
      .then(response => {
        this.props.history.push("/");
      });
  };
  render() {
    let { houses } = this.state;
    houses.map((house, i) => {
      return <House>key={i}</House>;
    });
    return (
      <div>
        <h1>Dashboard</h1>
        <House />
        <button>Add New Property</button>
        <button>Cancel</button>
      </div>
    );
  }
}

export default Dashboard;
