import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "#90e5fc";
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#bff0fd",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    fontStyle: "bold",
  },
  description: {
    width: "35%",
    textAlign: "left",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
  },
  qty: {
    width: "25%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "right",
    paddingRight: 8,
  },
  rate: {
    width: "15%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "right",
    paddingRight: 8,
  },
  amount: {
    width: "15%",
    textAlign: "right",
    paddingRight: 8,
  },
  units: {
    width: "10%",
    textAlign: "right",
    paddingRight: 8,
  },
});

const InvoiceTableRow = ({ data }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.description}>{data.name}</Text>
      <Text style={styles.qty}>{data.meter_no}</Text>
      <Text style={styles.rate}>{data.previous_reading}</Text>
      <Text style={styles.amount}>{data.current_reading}</Text>
      <Text style={styles.units}>{data.units}/=</Text>
    </View>
  );
};

export default InvoiceTableRow;
