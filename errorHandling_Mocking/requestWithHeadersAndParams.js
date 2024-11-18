const axios = require('axios');

const baseURL = 'https://jsonplaceholder.typicode.com';

const makeRequestWithHeadersAndParams = async (headers, params) => {
  try {
    const response = await axios.get(`${baseURL}/posts`, {
      headers,
      params,
    });
    return response.data;
  } catch (error) {
    throw new Error('Request failed');
  }
};

module.exports = makeRequestWithHeadersAndParams;

