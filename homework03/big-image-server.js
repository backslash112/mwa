// Question 2:
// Create a web server thats going to send a response ot big image (bigger then 3MB)
// to any client that sends a request to your specified server:port.
// Use the best way for performance.
// (Try to solve this in many different ways and inspect the loading time
// in the browser and send many requests to see the performance differences)

'use strict';

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'image/png'});
  fs.createReadStream('newVacation.jpg').pipe(res);
}).listen(4000, '0.0.0.0', () => {
  console.log('Server running on 4000...');
});
