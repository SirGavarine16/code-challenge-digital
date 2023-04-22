import { mockApi } from '../../../src/api';

describe('mockApi', () => {
    const mockApiURL = 'https://6222994f666291106a29f999.mockapi.io/api/v1';

    it('axios instance should be defined', () => {
        expect(mockApi).toBeDefined();
    });

    it('baseURL should be the mock api url', () => {
        expect(mockApi.defaults.baseURL).toBe(mockApiURL);
    });
});
