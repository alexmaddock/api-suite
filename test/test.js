// var assert = require('assert');
import assert from 'assert';
import jwt from '../http-client/api-client.js';
import { axio } from '../http-client/axios-client.js';

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', async function () {
      console.log(await jwt());
      // console.log(await axio());
      // assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

