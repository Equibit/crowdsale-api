// Initializes the `answers` service on path `/answers`
const createService = require('feathers-mongoose')
const createModel = require('./answers.model')
const hooks = require('./answers.hooks')
const filters = require('./answers.filters')

module.exports = function () {
  const app = this
  const Model = createModel(app)
  const paginate = app.get('paginate')

  const options = {
    name: 'answers',
    Model,
    paginate
  }

  // Initialize our service with any options it requires
  app.use('/answers', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('answers')

  service.hooks(hooks)

  if (service.filter) {
    service.filter(filters)
  }
}
