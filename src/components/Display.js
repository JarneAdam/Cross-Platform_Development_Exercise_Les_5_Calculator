import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Display = () => {
    return (
        <Text style={styles.display}>381.654.729</Text>
    );
};

const styles = StyleSheet.create({
    display: {
        color: 'white',
        fontSize: 40,
        textAlign: 'right',
        marginTop: 10,
        marginRight: 20,
    }
});

export default Display;