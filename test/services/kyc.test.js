const assert = require('assert')
const app = require('../../src/app')

describe('\'kyc\' service', () => {
  it('registered the service', () => {
    const service = app.service('kyc')

    assert.ok(service, 'Registered the service')
  })
})
