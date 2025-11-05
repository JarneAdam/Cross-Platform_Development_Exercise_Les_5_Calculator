import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import theme from '../styles/theme.styles';

const { width } = Dimensions.get('window');
const buttonWidth = width / 4;

const Button = () => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>1</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.BUTTON_BACKGROUNDCOLOR,
        margin: 5,
        height: buttonWidth - 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: (buttonWidth - 10) / 2,
        flex: 1,
    },
    text: {
        color: theme.BUTTON_TEXT_COLOR,
        fontSize: theme.BUTTON_FONT_SIZE,
    }
});

export default Button;