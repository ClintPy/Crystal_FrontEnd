import React, { Component } from "react";
import api from "../util/api";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import "../App.css";

class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      render: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      axios.get(api).then((responce) => {
        const data = responce.data;
        this.setState({ data });
      });
    }, 1000);
  }
  
  render() {
    const { data } = this.state;
    // console.log(data.reverse())
    if (data.length === 0) return <Loading />;
    return (
      <div className="container">
        <h4 className="blue-text center">Crystal Crater Water</h4>
        <h5 className="center teal-text">Client Details</h5>
        <Link to="/users">
          <button className="teal btn right-space">Add Client</button>
        </Link>
        <Link to="/add">
          <button className="teal btn right-space">Add Meter Reading</button>
        </Link>
        <hr />
        <table className="striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>ID Number</th>
              <th>Phone Number</th>
              <th>Meter Number</th>
              <th>Previous Reading</th>
              <th>Current Reading</th>
              <th>Units</th>
            </tr>
          </thead>
          <tbody>
            {data.reverse().map((client) => (
              <tr>
                <td>{client.name}</td>
                <td>{client.id_number}</td>
                <td>{client.phone_number}</td>
                <td>{client.meter_no}</td>
                <td>{client.previous_reading}</td>
                <td>{client.current_reading}</td>
                <td>{client.units}/=</td>
                <Link to={"/user/" + client._id}>
                  <button className="btn">view</button>
                </Link>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Client;
