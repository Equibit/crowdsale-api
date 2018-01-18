/* eslint-disable no-unused-vars */
const axios = require('axios')

class Service {
  constructor (options) {
    this.options = options || {}
  }

  find (params) {
    // todo: remove later, this is just for testing
    return this.create({}, params)
    // return Promise.resolve([])
  }

  get (id, params) {
    return Promise.resolve({
      id, text: `A new message with ID: ${id}!`
    })
  }

  create (data, params) {
    console.log('KYC: data and params.query: ', data, params.query)
    const config = this.options
    const action = '/connection/v1/testauthentication'

    return axios({
      method: 'GET',
      url: config.url + action,
      data: {},
      auth: {
        username: config.username,
        password: config.password
      }
    })
      .then(res => res.data)
      .catch(err => {
        console.log('_______ KYC ERROR: ', (err.response && err.response.data) || err.message)
        return (err.response && err.response.data) || {error: {message: err.message}}
      })
  }

  update (id, data, params) {
    return Promise.resolve(data)
  }

  patch (id, data, params) {
    return Promise.resolve(data)
  }

  remove (id, params) {
    return Promise.resolve({ id })
  }
}

module.exports = function (options) {
  return new Service(options)
}

module.exports.Service = Service
