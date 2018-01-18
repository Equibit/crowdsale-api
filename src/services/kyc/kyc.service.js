// Initializes the `kyc` service on path `/kyc`
const createService = require('./kyc.class.js')
const hooks = require('./kyc.hooks')
const filters = require('./kyc.filters')

module.exports = function () {
  const app = this

  const options = Object.assign({
    name: 'kyc'
  }, app.get('trulioo'))

  // Initialize our service with any options it requires
  app.use('/kyc', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('kyc')

  service.hooks(hooks)

  if (service.filter) {
    service.filter(filters)
  }
}
