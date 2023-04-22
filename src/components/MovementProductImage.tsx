import React, { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { colors } from '../themes/AppTheme';

interface Props {
    image: string;
}

const MovementProductImage: FC<Props> = ({ image }) => {
    const { container, content } = styles;

    return (
        <View testID='card-image' style={container}>
            <Image testID='product-image' source={{ uri: image }}  style={content} resizeMode='contain' />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        aspectRatio: 1 / 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.background
    }
})

export default MovementProductImage;
