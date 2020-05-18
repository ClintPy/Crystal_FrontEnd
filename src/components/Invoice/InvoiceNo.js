import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  invoiceNoContainer: {
    flexDirection: "row",
    marginTop: 36,
    marginRight: 20,
    justifyContent: "flex-end",
  },
  invoiceDateContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    fontSize: 12,
    marginRight: 20,
    paddingRight: "1rem",
  },
  invoiceDate: {
    fontSize: 12,
    fontStyle: "bold",
  },
  label: {
    width: 60,
  },
});

const InvoiceNo = ({data}) => (
  <Fragment>
    <View style={styles.invoiceNoContainer}>
      <Text>Invoice No:</Text>
      <Text>{data.meter_no}</Text>
    </View>
    <View style={styles.invoiceDateContainer}></View>
  </Fragment>
);

export default InvoiceNo;
