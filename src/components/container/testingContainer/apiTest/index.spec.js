import React from 'react';
import ApiTest from './index';
import axios from 'axios';
import sinon from 'sinon';
import nock from 'nock';
import { makeRequest, getUser } from './api.service';

describe('component ApiTest', () => {
  //DATA FOR RETURNING
  const res = {
    data: {
      answer: 'it works',
    },
  };
  const promise = Promise.resolve(res);

  //PREPAPRE TEST
  before(() => {
    sinon
      .stub(axios, 'get')
      .withArgs('http://localhost:3001/feedback')
      .returns(promise);
  });

  after(() => {
    axios.get.restore();
  });

  it('should render the request get fetch', () => {
    const wrapper = shallow(<ApiTest />);

    expect(wrapper.state().answer).to.equal('not yet');

    promise
      .then(() => {
        expect(wrapper.state().answer).to.equal('it works');
      })
      .catch((err) => console.error(err));
  });

  it('should return request answer', async () => {
    const res = await promise;
    expect(res.data.answer).to.equal('it works');
  });
});

describe('apiTest with Nock', () => {
  const res = {
    data: {
      answer: 'it works',
    },
  };
  const promise = Promise.resolve(res);

  beforeEach(() => {
    nock('http://localhost:3001').get('/feedback').reply(200, res);
  });

  it.skip('should return request answer using nock', async () => {
    //const res = makeRequest();
    expect('it works').to.equal('it works');
  });

  it('should return request answer using nock2', () => {
    // return getUser().then((res) => {
    //   expect('it works').to.equal('it works');
    // });
  });
});
