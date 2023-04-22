import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
}

const MovementListItemSeparator: FC<Props> = () => {
    const { container } = styles;
    return (
        <View style={container} />
    );
};

const styles = StyleSheet.create({
    container: {
        height: 5,
    },
});

export default MovementListItemSeparator;
