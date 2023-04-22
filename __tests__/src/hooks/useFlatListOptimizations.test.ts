import { renderHook } from '@testing-library/react-native';

import { useFlatListOptimizations } from '../../../src/hooks';

describe('useFlatListOptimizations', () => {
    const render = () => renderHook(() => useFlatListOptimizations<any>('id', 55));

    it('should return and object with keyExtractor and getItemLayout function', () => {
        const { result } = render();
        expect(result.current).toEqual({
            keyExtractor: expect.any(Function),
            getItemLayout: expect.any(Function),
        });
    });
});