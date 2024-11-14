const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const validatePostStructure = (post) => {
    expect(post).toHaveProperty('userId');
    expect(post).toHaveProperty('id');
    expect(post).toHaveProperty('title');
    expect(post).toHaveProperty('body');
};

const validateUserStructure = (user) => {
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('username');
    expect(user).toHaveProperty('email');
};

describe('JSONPlaceholder API Tests', () => {

    test('GET /posts/1 - should return a post with correct structure and status 200', async () => {
        const response = await axios.get(`${BASE_URL}/posts/1`);
        expect(response.status).toBe(200);
        validatePostStructure(response.data);
    });

    test('POST /posts - should create a new post and return status 201', async () => {
        const newPost = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        };
        const response = await axios.post(`${BASE_URL}/posts`, newPost);
        expect(response.status).toBe(201);
        validatePostStructure(response.data);
        expect(response.data).toMatchObject(newPost);
    });

    test('GET /users/1 - should return a user with correct structure and status 200', async () => {
        const response = await axios.get(`${BASE_URL}/users/1`);
        expect(response.status).toBe(200);
        validateUserStructure(response.data);
    });

    test('GET /posts - should return an array of posts with correct structure', async () => {
        const response = await axios.get(`${BASE_URL}/posts`);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
        response.data.forEach(validatePostStructure);
    });

    test('GET /users - should return an array of users with correct structure', async () => {
        const response = await axios.get(`${BASE_URL}/users`);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
        response.data.forEach(validateUserStructure);
    });
});
