import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "#90e5fc";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: "#bff0fd",
    backgroundColor: "#bff0fd",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    textAlign: "center",
    fontStyle: "bold",
  },
  description: {
    width: "35%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  qty: {
    width: "25%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  rate: {
    width: "15%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  amount: {
    width: "15%",
  },
  units: {
    width: "10%",
  },
});

const InvoiceTableHeader = () => (
  <View style={styles.container}>
    <Text style={styles.description}>Client's Name</Text>
    <Text style={styles.qty}>Meter No.</Text>
    <Text style={styles.rate}>Prev. Reading</Text>
    <Text style={styles.amount}>Curr. Reading</Text>
    <Text style={styles.units}>Units</Text>
  </View>
);

export default InvoiceTableHeader;
