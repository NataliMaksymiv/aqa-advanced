const axios = require('axios');

const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 1000,
});

apiClient.interceptors.request.use(
    (config) => {
        console.log(`Request: ${config.method.toUpperCase()} ${config.url}`);
        console.log('Request Headers:', config.headers);
        if (config.data) {
            console.log('Request Data:', config.data);
        }
        return config;
    },
    (error) => {
        console.error('Request Error:', error);
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response) => {
        console.log(`Response from ${response.config.url}:`, response.status);
        console.log('Response Data:', response.data);
        return response;
    },
    (error) => {
        if (error.response) {
            console.error(`Response Error from ${error.config.url}:`, error.response.status);
            console.error('Response Data:', error.response.data);
        } else {
            console.error('Response Error:', error.message);
        }
        return Promise.reject(error);
    }
);

async function testInterceptors() {
    try {
        await apiClient.get('/todos/1');
        await apiClient.post('/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1,
        });
    } catch (error) {
        console.error('Error in API call:', error.message);
    }
}

testInterceptors();
