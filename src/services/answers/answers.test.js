const assert = require('assert')
const app = require('../../app')

describe('\'answers\' service', () => {
  it('registered the service', () => {
    const service = app.service('answers')

    assert.ok(service, 'Registered the service')
  })
})
