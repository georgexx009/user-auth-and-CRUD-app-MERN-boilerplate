import axios from 'axios';
import { retrieveAllPosts } from '../pubs.service';
import { posts } from '../../constants/dataForTest';
jest.mock('axios');

describe('pubs.service', () => {
  it('should return a list of posts', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(posts));

    await expect(retrieveAllPosts()).resolves.toEqual(posts.data);
  });

  it('should handle the bad request', async () => {
    console.log = jest.fn();
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        status: 400,
      })
    );
    await expect(retrieveAllPosts()).resolves.toBeUndefined();
    // The first argument of the first call to the function was 0
    expect(console.log.mock.calls[0][0]).toContain('bad request');
  });
});
