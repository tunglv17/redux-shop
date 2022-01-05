import axios from 'axios';
export const AxiosClient = axios.create({
    baseURL: 'https://61cac3a7194ffe0017788913.mockapi.io',
    headers: {
        'Content-Type': 'application/json',
    },
});
export default AxiosClient