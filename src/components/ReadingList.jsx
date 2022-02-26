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
        {this.state.readings.map((reading) => {
          return (
            <div>
              <h2>{reading.title}</h2>
              <p>{reading.content}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
