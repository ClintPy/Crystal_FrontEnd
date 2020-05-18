import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    titleContainer:{
        flexDirection: 'row',
        marginTop: 24,
    },
    reportTitle:{
        color: '#008080',
        letterSpacing: 4,
        fontSize: 25,
        textAlign: 'center',
        textTransform: 'uppercase',
    }
  });

  const InvoiceTitle = () => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>Crytal Crater Water</Text>
    </View>
  );
  
  export default InvoiceTitle