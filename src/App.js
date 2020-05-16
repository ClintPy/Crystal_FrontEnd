import React, { Component } from "react";
import Form from "./components/Form";
import { Link } from "react-router-dom";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="container">
        <h5 className="blue-text center">Crystal Crater Water</h5>
        <h6 className="blue-text center">Water Billing System</h6>
        <Link to="/">
          <button className="blue btn">View Clients</button>
        </Link>
        <hr />
        <h6 className="teal-text">Client Details</h6>
        <Form />
      </div>
    );
  }
}

export default App;
