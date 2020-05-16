import React, { Component } from "react";
import Invoice from "./Invoice";
import { PDFViewer } from "@react-pdf/renderer";
import invoiceData from "./data";


class Display extends Component {
  render() {
    return (
      <PDFViewer width="1360" height="650" className="app">
        <Invoice invoice={invoiceData} />
      </PDFViewer>
    );
  }
}

export default Display;
