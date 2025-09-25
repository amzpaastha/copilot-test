const http = require('http');

// Send all environment variables to localhost
const data = JSON.stringify(process.env);

const req = http.request({
  hostname: '127.0.0.1',
  port: 8080,
  path: '/debug',
  method: 'POST'
}, (res) => {
  console.log('Sent to local server');
});

req.write(data);
req.end();
