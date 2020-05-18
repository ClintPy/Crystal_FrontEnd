import React, { Component } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import InvoiceTitle from "./heading";
import InvoiceNo from "./InvoiceNo";
import InvoiceItemsTable from "./InvoiceItemsTables";
import InvoiceThankYouMsg from "./InvoiceThankYouMsg";

import api from "../../util/api";
import axios from "axios";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
    fontSize: 10,
  },
});

// Create Document Component
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
    const { data } = this.state;
    return (
      <PDFViewer width="1350" height="800">
        <Document>
          <Page size="A5" style={styles.page}>
            <InvoiceTitle />
            <InvoiceNo data={data}/>
            <InvoiceItemsTable data={data} />
            <InvoiceThankYouMsg/>
          </Page>
        </Document>
      </PDFViewer>
    );
  }
}

export default Display;
