const assert = require('assert');
const app = require('../../app');

describe('\'ico-balance\' service', () => {
  it('registered the service', () => {
    const service = app.service('ico-balance');

    assert.ok(service, 'Registered the service');
  });
});
