import React, { FC } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Movement } from '../interfaces';
import { formatDate } from '../utils/formats';
import { AppStackParams } from '../navigation/AppStack';

interface Props {
    item: Movement;
}

const MovementCard: FC<Props> = ({ item }) => {
    const { container, image, dataContainer, boldText, normalText, pointsContainer, pointsText } = styles;

    const { navigate } = useNavigation<StackNavigationProp<AppStackParams>>();

    return (
        <TouchableOpacity testID='card' style={container} onPress={() => navigate('MovementScreen', item)}>
            <Image testID='image' source={{ uri: item.image }} style={image} resizeMode='contain' />
            <View style={dataContainer}>
                <Text testID='name' style={boldText}>
                    {item.product}
                </Text>
                <Text testID='date' style={[normalText, { marginTop: 2 }]}>
                    {formatDate(item.createdAt)}
                </Text>
            </View>
            <View style={pointsContainer}>
                <MaterialCommunityIcons testID='points-icon' name={item.is_redemption ? 'minus' : 'plus'} color={item.is_redemption ? '#FF0000' : '#00B833'} />
                <Text testID='points' style={pointsText}>
                    {item.points}
                </Text>
            </View>
            <MaterialCommunityIcons size={25} name='chevron-right' color='#070707'  />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
    },
    image: {
        width: 55,
        height: 55,
        resizeMode: 'contain',
        borderRadius: 5,
    },
    dataContainer: {
        marginLeft: 10,
        maxWidth: '50%',
        justifyContent: 'center'
    },
    normalText: {
        fontSize: 12,
        fontWeight: '400',
    },
    boldText: {
        fontWeight: '800'
    },
    pointsContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    pointsText: {
        fontSize: 16,
        fontWeight: '800',
    }
});

export default MovementCard;
