import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    message?: string;
    username?: string;
}

const WelcomeHeader: FC<Props> = ({ message = 'Bienvenido de vuelta!', username = 'Ruben Rodríguez' }) => {
    const { container, text, bold } = styles;
    
    return (
        <View style={container}>
            <Text testID='welcome-message' style={[text, bold]}>
                {message}
            </Text>
            <Text testID='user-name' style={[text]}>
                {username}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: '400'
    },
    bold: {
        fontWeight: '800',
    },
})

export default WelcomeHeader;
