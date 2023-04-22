import { useCallback } from 'react';

const useFlatListOptimizations  = <T> (key: keyof T, itemHeight: number) => {
    const keyExtractor = useCallback((item: T) => {
        const uniqueKey = item[key];
        if (typeof uniqueKey === 'number') {
            return uniqueKey.toString();
        }
        return uniqueKey as string;
    }, []);
    
    const getItemLayout = useCallback((data: T[] | null | undefined, index: number) => ({
        length: itemHeight,
        offset: itemHeight * index,
        index,
    }), []) ;

    return {
        keyExtractor,
        getItemLayout,
    };
}

export default useFlatListOptimizations;