// Initializes the `ico-balance` service on path `/ico-balance`
const createService = require('feathers-mongoose')
const createModel = require('./ico-balance.model')
const hooks = require('./ico-balance.hooks')
const filters = require('./ico-balance.filters')

module.exports = function () {
  const app = this
  const Model = createModel(app)
  const paginate = app.get('paginate')

  const options = {
    name: 'ico-balance',
    Model,
    paginate
  }

  // Initialize our service with any options it requires
  app.use('/ico-balance', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('ico-balance')

  service.hooks(hooks)

  if (service.filter) {
    service.filter(filters)
  }
}
