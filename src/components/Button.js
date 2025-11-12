import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import theme from '../styles/theme.styles';

const { width } = Dimensions.get('window');
const buttonWidth = width / 4;

const Button = ({ value = '0', thema }) => {
    // Bepaal de achtergrondkleur op basis van het thema
    let backgroundColor = {};
    if (thema === 'accent') {
        backgroundColor = { backgroundColor: theme.BUTTON_ACCENT };
    } else if (thema === 'alternative') {
        backgroundColor = { backgroundColor: theme.BUTTON_ALTERNATIVE };
    } else if (thema === 'super') {
        backgroundColor = { backgroundColor: theme.BUTTON_SUPER };
    }

    return (
        <TouchableOpacity style={[styles.button, backgroundColor]}>
            <Text style={styles.text}>{value}</Text>
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