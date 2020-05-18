import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../util/api";
import axios from "axios";
import Loading from "./Loading";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(api + id).then((res) => {
      const data = res.data;
      this.setState({ data });
    });
  }

  render() {
    const { data } = this.state;
    const id = this.props.match.params.id;
    // console.log(data.name)
    if (data.length === 0) return <Loading />;
    return (
      <div className="container">
        <h5 className="center teal-text">{data.name}'s Details</h5>
        <Link to="/">
          <button className="teal btn">Back</button>
        </Link>
        <hr />
        <table className="striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>ID No.</th>
              <th>Phone No.</th>
              <th>Meter No.</th>
              <th>Previous Reading</th>
              <th>Current Reading</th>
              <th>Units</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.name}</td>
              <td>{data.id_number}</td>
              <td>{data.phone_number}</td>
              <td>{data.meter_no}</td>
              <td>{data.previous_reading}</td>
              <td>{data.current_reading}</td>
              <td>{data.units}/=</td>
            </tr>
            <br></br>
            <Link to={"/display/" + id}>
              <button className="btn teal right-space">Generate Report</button>
            </Link>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Details;
