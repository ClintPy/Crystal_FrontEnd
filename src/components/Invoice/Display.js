import React, { Component } from "react";
import Invoice from "./Invoice";
import { PDFViewer } from "@react-pdf/renderer";
import invoiceData from "./data";
import axios from "axios";
import api from "../../util/api";

class Display extends Component {
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
    const { data } = this.state
    const id = this.props.match.params.id;
    console.log(data);
    return (
      <PDFViewer width="1360" height="650" className="app">
        <Invoice invoice={data} />
      </PDFViewer>
    );
  }
}

export default Display;
