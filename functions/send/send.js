// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
exports.handler = async (event, context) => {

  try {
    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}

/*   const formData = require('form-data');
  const Mailgun = require('mailgun.js');
  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({
    username: 'api',
    key: 'e6d6a46093a4d300674ebb98e1d2eb63-07ec2ba2-ecd50a76',
  });
  mg.messages
    .create(sandbox6cd7759022234fe289d481b1362d9450.mailgun.org, {
      from: "Mailgun Sandbox <postmaster@sandbox6cd7759022234fe289d481b1362d9450.mailgun.org>",
      to: ["alanaandreazza26@gmail.com"],
      subject: "Hello",
      text: "Testing some Mailgun awesomness!",
    })
    .then(msg => console.log(msg)) // logs response data
    .catch(err => console.log(err)); // logs any error`;
*/