// var assert = require('assert');
import assert from 'assert';
import jwt from '../http-client/api-client.js';

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      jwt().then(function(response) {
        console.log(response);
      });
      // assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

