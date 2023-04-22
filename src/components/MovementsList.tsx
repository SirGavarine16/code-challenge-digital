import React, { FC, useCallback } from 'react';
import { StyleSheet, View, FlatList, ListRenderItemInfo } from 'react-native';

import Button from './Button';
import MovementCard from './MovementCard';
import SectionLabel from './SectionLabel';
import MovementListItemSeparator from './MovementListItemSeparator';
import { useFlatListOptimizations, useMovementsListControl } from '../hooks';
import { Movement } from '../interfaces';

interface Props {
    bottom?: number;
}

const MovementsList: FC<Props> = ({ bottom = 0 }) => {
    const { container, listContainer, filtersContainer } = styles;

    const { keyExtractor, getItemLayout } = useFlatListOptimizations<Movement>('id', 55);
    const { data, filter, resetFilter, showNegativeMovements, showPositiveMovements } = useMovementsListControl();

    // Using inline arrow function to render FlatList item re-creates the function on every re-render.
    const renderItem = useCallback(({ item }: ListRenderItemInfo<Movement>) => {
        return <MovementCard item={item} />
    }, [])

    return (
        <View style={[container, { paddingBottom: bottom === 0 ? 20 : 0 }]}>
            <SectionLabel label='Tus movimientos' />
            <View testID='list-container' style={listContainer}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    ItemSeparatorComponent={MovementListItemSeparator}
                    keyExtractor={keyExtractor}
                    getItemLayout={getItemLayout}
                    maxToRenderPerBatch={8}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <View style={filtersContainer}>
                {
                    filter !== ''
                        ? <Button title='Todos' onPress={resetFilter} />
                        : <>
                            <Button title='Ganados' width='48.5%' onPress={showPositiveMovements} />
                            <Button title='Canjeados' width='48.5%' onPress={showNegativeMovements} />
                        </>
                }
            </View>
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
