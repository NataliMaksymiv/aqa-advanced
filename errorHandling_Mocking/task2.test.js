const makeRequestWithHeadersAndParams = require('./requestWithHeadersAndParams');
const axios = require('axios');

jest.mock('axios');

describe('makeRequestWithHeadersAndParams', () => {
  test('includes custom headers and parameters in the request', async () => {
    const headers = {
      Authorization: 'Bearer test-token',
      'Custom-Header': 'CustomValue',
    };
    const params = { userId: 1 };
    const mockResponse = { data: [{ id: 1, title: 'Test Post' }] };

    axios.get.mockResolvedValue(mockResponse);

    const result = await makeRequestWithHeadersAndParams(headers, params);

    expect(axios.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts',
      {
        headers,
        params,
      }
    );
    expect(result).toEqual(mockResponse.data);
  });

  test('throws an error if the request fails', async () => {
    axios.get.mockRejectedValue(new Error('Request failed'));

    await expect(
      makeRequestWithHeadersAndParams({}, {})
    ).rejects.toThrow('Request failed');
  });
});
