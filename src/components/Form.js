import React, { Component } from "react";
import axios from "axios";
import api from "../util/api";

import "../App.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      id_number: "",
      phone_number: "",
      meter_no: "",
      previous_reading: "",
      current_reading: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      id_number,
      phone_number,
      meter_no,
      previous_reading,
      current_reading,
    } = this.state;
    axios
      .post(api, {
        name,
        id_number,
        phone_number,
        meter_no,
        previous_reading,
        current_reading,
      })
      .then(() => {
        this.setState({
          name: "",
          id_number: "",
          phone_number: "",
          meter_no: "",
          previous_reading: "",
          current_reading: "",
        });
      });
  };

  handleChange = (key, event) => {
    this.setState({
      [key]: event.target.value,
    });
  };

  render() {
    return (
      <form>
        <fieldset>
          <div>
            <label htmlFor="aligned-name">Name:</label>
            <input
              type="text"
              id="aligned-name"
              placeholder="Name"
              onChange={ev => this.handleChange("name", ev)}
            />
          </div>
          <div className="pure-control-group">
            <label htmlFor="aligned-password">Id Number</label>
            <input
              type="text"
              id="aligned-password"
              placeholder="Id Number"
              onChange={ev => this.handleChange("id_number", ev)}
            />
          </div>
          <div className="pure-control-group">
            <label htmlFor="aligned-email">Phone Number</label>
            <input
              type="text"
              id="aligned-email"
              placeholder="Phone Number"
              onChange={ev => this.handleChange("phone_number", ev)}
            />
          </div>
          <div className="pure-control-group">
            <label htmlFor="aligned-foo">Meter Number</label>
            <input
              type="text"
              id="aligned-foo"
              placeholder="Meter Number"
              onChange={ev => this.handleChange("meter_no", ev)}
            />
          </div>
          <div className="pure-control-group">
            <label htmlFor="aligned-foo">Previous Reading</label>
            <input
              type="text"
              id="aligned-foo"
              placeholder="Previous Reading"
              onChange={ev => this.handleChange("previous_reading", ev)}
            />
          </div>
          <div className="pure-control-group">
            <label htmlFor="aligned-foo">Current Reading</label>
            <input
              type="text"
              id="aligned-foo"
              placeholder="Current Reading"
              onChange={ev => this.handleChange("current_reading", ev)}
            />
          </div>
          <div className="pure-controls">
            <button type="submit" className="btn center" onSubmit={this.handleSubmit}>
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default Form;
