import axios from 'axios';
import sinon from 'sinon';
//3import { loginService } from '../loginService';

describe.skip('loginService', () => {
  let getSomething;
  beforeEach(() => {
    getSomething = sinon.stub(axios, 'get');
  });
  afterEach(() => {
    getSomething.restore();
  });

  it('should return object', async () => {
    const res = { status: 200 };
    getSomething
      .withArgs('http://localhost:8080/')
      .returns(Promise.resolve(res));

    const result = await axios({
      method: 'get',
      url: 'http://localhost:8080/',
    });

    expect(result.status).to.equal(200);
  });
});
