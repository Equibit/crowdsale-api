const errors = require('feathers-errors')
const { randomBytes } = require('crypto')

// Create temporary email code to change email
// Though not needed functionally, it returns a promise for consistent testing with other hooks.
module.exports = function (options) {
  return hook => {
    const user = hook.params.user
    if (!user) {
      return Promise.reject(new Error(`No user found with the provided id ${hook.id}`))
    }

    const code = hook.data.smsCode
    if (!code || code !== user.smsCode) {
      console.log(`expected ${code} to be equal to user.smsCode=${user.smsCode}`)
      return Promise.reject(new errors.BadRequest('Please provide the correct SMS code'))
    }

    hook.data.questionnaire = 'QUESTIONS'

    // Cleanup phonenumber and smsCode since its one-time thing:
    // (Note: if we don't want to clear the phone then hooks logic should be changed)
    hook.data.phoneNumber = ''
    hook.data.smsCode = ''

    return Promise.resolve(hook)
  }
}
