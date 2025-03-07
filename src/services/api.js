import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
});

// Add request interceptor to include token
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('walletToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
console.log(api,"jjddjdj")
export const loginWithWallet = async (walletAddress) => {
    try {
        const response = await api.post('/user/login-with-wallet', { walletAddress });
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

export const logoutWallet = async () => {
    try {
        const response = await api.post('/user/logout');
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

export const getUserProfile = async (token) => {
    try {
        const response = await api.get('/auth/profile', {
            headers: { Authorization: ` Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};


export const getAllCategory = async (token) => {
    try {
        const response = await api.get('/category/get-all', {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};
