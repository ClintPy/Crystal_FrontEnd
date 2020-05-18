import React from "react";
import { Page, Document, StyleSheet } from "@react-pdf/renderer";
import InvoiceTitle from "./heading";
import InvoiceNo from "./InvoiceNo";
import BillTo from "./BillTo";
import InvoiceItemsTable from "./InvoiceItemsTables";
import InvoiceThankYouMsg from "./InvoiceThankYouMsg";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: "column",
  },
});

const Invoice = ({ invoice }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <InvoiceTitle title="Crystal Crater Water" />
      <InvoiceNo invoice={invoice.meter_no}/>
      <BillTo invoice={invoice} />
      <InvoiceItemsTable invoice={invoice}/>
      {/* <InvoiceTableFooter invoice={invoice} /> */}
      <InvoiceThankYouMsg invoice={invoice}/>
    </Page>
  </Document>
);

export default Invoice;
