const fetchData = require('./axiosRequests');
const axios = require('axios');

jest.mock('axios');

describe('fetchData', () => {
  test('returns data on a successful request', async () => {
        const mockData = [{ id: 1, title: 'Test Post' }];
    axios.get.mockResolvedValue({ data: mockData });

    const result = await fetchData('/posts');

    expect(result).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts'
    );
  });

  test('throws an error for a server error', async () => {
    axios.get.mockRejectedValue({
      response: {
        status: 500,
      },
    });

    await expect(fetchData('/posts')).rejects.toThrow('Server Error: 500');
  });

  test('throws an error if no response is received', async () => {
    axios.get.mockRejectedValue({
      request: {},
    });

    await expect(fetchData('/posts')).rejects.toThrow(
      'No response from server'
    );
  });

  test('throws an error for setup issues', async () => {
    axios.get.mockRejectedValue(new Error('Network Error'));

    await expect(fetchData('/posts')).rejects.toThrow('Error: Network Error');
  });
});
