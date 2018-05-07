'use strict'

const users = require('./users/users.service.js')
const postmark = require('./postmark-messages')

const forgotPassword = require('./forgot-password/forgot-password.service.js')

const kyc = require('./kyc/kyc.service.js')

const icoBalance = require('./ico-balance/ico-balance.service.js')

const answers = require('./answers/answers.service.js')

const questions = require('./questions/questions.service.js')

module.exports = function () {
  const app = this
  app.configure(users)
  app.configure(postmark)
  app.configure(forgotPassword)
  app.configure(kyc)
  app.configure(icoBalance)
  app.configure(answers)
  app.configure(questions)
}
