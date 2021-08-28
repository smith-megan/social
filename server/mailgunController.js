var DOMAIN = 'YOUR_DOMAIN_NAME';
// https://api.mailgun.net/v3/<domain>/messages
var mailgun = require('mailgun-js')({ apiKey: "YOUR_API_KEY", domain: DOMAIN });

mailgun.post('/lists', {"address": `list_name@${DOMAIN}`, "description": "list_description"}, function (error, body) {
  console.log(body);
});
