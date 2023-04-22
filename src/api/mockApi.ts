import axios from 'axios';

const mockApi = axios.create({
    baseURL: 'https://6222994f666291106a29f999.mockapi.io/api/v1',
});

export default mockApi;