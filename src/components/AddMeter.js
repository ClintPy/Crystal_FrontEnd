import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import "../App.css";

class AddMeter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      id_number: "",
      phone_number: "",
      meter_no: "",
      previous_reading: "",
      current_reading: "",
      redirect: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      name: this.state.name,
      id_number: this.state.id_number,
      phone_number: this.state.phone_number,
      meter_no: this.state.meter_no,
      previous_reading: this.state.previous_reading,
      current_reading: this.state.current_reading,
    };
    axios.post("https://crystalcrater.herokuapp.com/api/v1/users/", user).then(
      (res) => {
        console.log(res.data);
      },
      (error) => {
        console.log(error);
      }
    );

    this.setState({
      name: "",
      id_number: "",
      phone_number: "",
      meter_no: "",
      previous_reading: "",
      current_reading: "",
      redirect: true,
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const {
      name,
      id_number,
      phone_number,
      meter_no,
      previous_reading,
      current_reading,
      redirect,
    } = this.state;
    if (redirect) {
      return <Redirect to="/"/>;
    }
    return (
      <div className="container">
        <h4 className="center teal-text">Add Meter Reading</h4>
        <Link to="/">
          <button className="teal btn">Back</button>
        </Link>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="aligned-name">Name:</label>
              <input
                type="text"
                placeholder="Name"
                value={name}
                name="name"
                onChange={this.handleChange}
              />
            </div>
            <div className="pure-control-group">
              <label htmlFor="aligned-password">Id Number</label>
              <input
                type="text"
                placeholder="Id Number"
                value={id_number}
                name="id_number"
                onChange={this.handleChange}
              />
            </div>
            <div className="pure-control-group">
              <label htmlFor="aligned-email">Phone Number</label>
              <input
                type="text"
                placeholder="Phone Number"
                value={phone_number}
                name="phone_number"
                onChange={this.handleChange}
              />
            </div>
            <div className="pure-control-group">
              <label htmlFor="aligned-foo">Meter Number</label>
              <input
                type="text"
                placeholder="Meter Number"
                value={meter_no}
                name="meter_no"
                onChange={this.handleChange}
              />
            </div>
            <div className="pure-control-group">
              <label htmlFor="aligned-foo">Previous Reading</label>
              <input
                type="text"
                placeholder="Previous Reading"
                value={previous_reading}
                name="previous_reading"
                onChange={this.handleChange}
              />
            </div>
            <div className="pure-control-group">
              <label htmlFor="aligned-foo">Current Reading</label>
              <input
                type="text"
                placeholder="Current Reading"
                value={current_reading}
                name="current_reading"
                onChange={this.handleChange}
              />
            </div>
            <div className="pure-controls">
              <button
                type="submit"
                className="btn center"
                onSubmit={this.handleSubmit}
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default AddMeter;
