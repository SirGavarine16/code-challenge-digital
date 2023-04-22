import React, { FC, useCallback, useEffect } from 'react';
import { StyleSheet, View, FlatList, ListRenderItemInfo, Animated } from 'react-native';

import { useAnimations, useFlatListOptimizations, useMovementsListControl } from '../hooks';
import { Movement } from '../interfaces';
import MovementListItemSeparator from './MovementListItemSeparator';
import MovementCard from './MovementCard';
import SectionLabel from './SectionLabel';
import Button from './Button';
import EmptyMovementsList from './EmptyMovementsList';

interface Props {
    bottom?: number;
}

const MovementsList: FC<Props> = ({ bottom = 0 }) => {
    const { container, listContainer, filtersContainer } = styles;

    const { keyExtractor, getItemLayout } = useFlatListOptimizations<Movement>('id', 55);
    const { data, filter, resetFilter, showNegativeMovements, showPositiveMovements, isLoading, onRefresh } = useMovementsListControl();
    const { opacity, fadeIn, fadeOut, movePosition, position } = useAnimations();

    useEffect(() => {
        fadeIn();
        movePosition(100, 300);
        return () => {
            fadeOut();
        }
    }, []);

    // Using inline arrow function to render FlatList item re-creates the function on every re-render.
    const renderItem = useCallback(({ item }: ListRenderItemInfo<Movement>) => {
        return <MovementCard item={item} />
    }, []);

    return (
        <View style={[container, { paddingBottom: bottom === 0 ? 20 : 0 }]}>
            <SectionLabel label='Tus movimientos' />
            <View testID='list-container' style={listContainer}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    ItemSeparatorComponent={MovementListItemSeparator}
                    ListEmptyComponent={EmptyMovementsList}
                    onRefresh={onRefresh}
                    refreshing={isLoading}
                    keyExtractor={keyExtractor}
                    getItemLayout={getItemLayout}
                    maxToRenderPerBatch={8}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <Animated.View style={[filtersContainer, { opacity, transform: [{ translateY: position }]}]}>
                {
                    filter !== ''
                        ? <Button title='Todos' onPress={resetFilter} />
                        : <>
                            <Button title='Ganados' width='48.5%' onPress={showPositiveMovements} />
                            <Button title='Canjeados' width='48.5%' onPress={showNegativeMovements} />
                        </>
                }
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 8,
        padding: 10,
    },
    filtersContainer: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default MovementsList;
