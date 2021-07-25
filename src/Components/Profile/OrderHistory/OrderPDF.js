import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { Button, Grid } from '@material-ui/core';

const BORDER_COLOR = '#bfbfbf'
const BORDER_STYLE = 'solid'
const COL1_WIDTH = 40
const COLN_WIDTH = (100 - COL1_WIDTH) / 3
const styles = StyleSheet.create({
    body: {
        padding: 10
    },
    table: {
        display: "table",
        width: "auto",
        borderStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR,
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0
    },
    tableRow: {
        margin: "auto",
        flexDirection: "row"
    },
    tableCol1Header: {
        width: COL1_WIDTH + '%',
        borderStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR,
        borderBottomColor: '#000',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0
    },
    tableColHeader: {
        width: COLN_WIDTH + "%",
        borderStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR,
        borderBottomColor: '#000',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0
    },
    tableCol1: {
        width: COL1_WIDTH + '%',
        borderStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0
    },
    tableCol: {
        width: COLN_WIDTH + "%",
        borderStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0
    },
    tableCellHeader: {
        margin: 5,
        fontSize: 12,
        fontWeight: 500
    },
    tableCell: {
        margin: 5,
        fontSize: 10
    }
});

const OrderPDF = ({ rows }) => {

    console.log(rows);
    return (<Document>
        <Page style={styles.body}>
            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <View style={styles.tableCol1Header}>
                        <Text style={styles.tableCellHeader}>Product</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>Category</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>Country</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>Quantity</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>Price</Text>
                    </View>
                </View>

                {rows && rows.map((row, i) => {
                    return (
                        <View key={i} style={styles.tableRow}>
                            <View style={styles.tableCol1}>
                                <Text style={styles.tableCell}>{row.id}</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{row.createdDate}</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>$ {row.finalTotal}</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>5€</Text>
                            </View>
                        </View>
                    )
                })}

            </View>
        </Page>
    </Document>)
}





export default OrderPDF