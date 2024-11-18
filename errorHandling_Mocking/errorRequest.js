const axios = require('axios');

const baseURL = 'https://jsonplaceholder.typicode.com';

const sendInvalidRequest = async () => {
  try {
    const response = await axios.get(`${baseURL}/nonexistent-endpoint`);
    return response.data;
  } catch (error) {
    if (error.response) {
      return `Error: Received status code ${error.response.status}`;
    } else if (error.request) {
      return 'Error: No response received';
    } else {
      return `Error: ${error.message}`;
    }
  }
};

module.exports = sendInvalidRequest;

