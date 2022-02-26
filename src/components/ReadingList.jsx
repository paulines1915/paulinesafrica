import React, { Component } from "react";

import axios from "axios";

export default class ReadingList extends Component {
  state = {
    readings: [],
  };

  componentDidMount = () => {
    axios.get("http://127.0.0.1:8000/api").then((response) => {
      this.setState({
        readings: response.data,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h3>Data From Our Backend Says...</h3>
        <h2>{console.log(this.state.readings)}</h2>
        <p>{this.state.readings.content}</p>
      </div>
    );
  }
}
