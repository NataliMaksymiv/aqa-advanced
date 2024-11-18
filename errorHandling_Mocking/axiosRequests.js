const axios = require('axios');

const baseURL = 'https://jsonplaceholder.typicode.com';

const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${baseURL}${endpoint}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(`Server Error: ${error.response.status}`);
    } else if (error.request) {
      throw new Error('No response from server');
    } else {
      throw new Error(`Error: ${error.message}`);
    }
  }
};

module.exports = fetchData;

