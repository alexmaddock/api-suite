// var assert = require('assert');
import { assert } from 'assert';

describe('Array', async function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      await assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});