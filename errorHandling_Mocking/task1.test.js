const sendInvalidRequest = require('./errorRequest');
const axios = require('axios');

jest.mock('axios');

describe('sendInvalidRequest', () => {
  test('handles a 404 error and returns the correct message', async () => {
    axios.get.mockRejectedValue({
      response: {
        status: 404,
      },
    });

    const result = await sendInvalidRequest();

    expect(result).toBe('Error: Received status code 404');
  });

  test('handles a no-response error and returns the correct message', async () => {
    axios.get.mockRejectedValue({
      request: {},
    });

    const result = await sendInvalidRequest();

    expect(result).toBe('Error: No response received');
  });

  test('handles a setup error and returns the correct message', async () => {
    axios.get.mockRejectedValue(new Error('Network Error'));

    const result = await sendInvalidRequest();

    expect(result).toBe('Error: Network Error');
  });
});
