import assert from 'assert';
import jwt from '../http-client/api-client.js';
import expect from 'expect.js';

describe('GET /stackoverflow', function () {
    it('search term returns something', async function () {
      let outcome = await jwt().then((response) => response);
      console.log(JSON.stringify(await outcome.json(), null, 2))
      expect(outcome.status).to.eql(200);
      expect(outcome.status).to.be.a('string');
      expect(outcome.statusText).to.be.a('string');
      expect(outcome.statusText).contain('OK');
    });
});

