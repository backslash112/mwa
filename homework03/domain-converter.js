// Question 1:
// Create a simple Node script that converts www.mum.edu domair name to the equivalent IP address.
// (Use 'dns' module, resolve4)


'use strict';

const dns = require('dns');
dns.lookup('mum.edu', (err, address, family) => {
  console.log("address: %j family: IPv%s", address, family);
});

// address: "192.249.118.206" family: IPv4
