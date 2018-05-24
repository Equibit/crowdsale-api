const { randomBytes } = require('crypto')

// Create temporary email code to change email
// Though not needed functionally, it returns a promise for consistent testing with other hooks.
module.exports = function (options) {
  return hook => {
    const twilioConfig = hook.app.get('twilio')

    // create a random string:
    hook.data.smsCode = randomBytes(5).toString('hex').toUpperCase()
    hook.data.questionnaire = 'WAITING-CODE'

    var accountSid = twilioConfig.accountSid; // Your Account SID from www.twilio.com/console
    var authToken = twilioConfig.authToken;   // Your Auth Token from www.twilio.com/console

    var twilio = require('twilio');
    var client = new twilio(accountSid, authToken);

    // Send SMS:
    return client.messages.create({
        body: `This is your verification code: ${hook.data.smsCode}`,
        to: hook.data.phoneNumber,
        from: twilioConfig.phoneNumber
      })
      .then((message) => console.log(`[sendSms]: to=${hook.data.phoneNumber}, message.sid=${message.sid}`))
      .then(() => hook)
  }
}
