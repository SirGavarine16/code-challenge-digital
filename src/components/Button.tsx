import React, { FC } from 'react';
import { FlexStyle, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

interface Props {
    title?: string;
    onPress?: () => void;
    width?: FlexStyle['width'];
}

const Button: FC<Props> = ({ title = '', onPress, width = '100%' }) => {
    const { colors } = useTheme();
    const { container, text } = styles;

    return (
        <TouchableOpacity activeOpacity={0.8} testID='button' onPress={onPress} style={[container, { backgroundColor: colors.primary, width }]}>
            <Text testID='button-title' style={text}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
        borderRadius: 10,
    },
    text: {
        color: 'white',
        fontSize: 14,
        fontWeight: '800',
        textAlign: 'center',
    }
})

export default Button;
