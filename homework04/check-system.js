'use strict';

// Write a Node code with a function checkSystem() that is responsible on checking
// if the system memory size Is at least 4 GB and the processor has more than 2 cores (use os module).
// 1. When you call the function, you should receive an immediate message on the console "Checking your system...”.
// 2. if the system doesn t have enough memory we should print a message to the console: "This app needs at least 4 GB of RAM’ 3.
// 3. If the system doesnt nave at least 2 cores, print this message to the console: Processor is not supported
// 4. It the system has enough specs, print the following message "System 1S checked successfully".

// Rewrite the last question using Observables.


// version 1:
const os = require('os');

const checkSystem = () => {
  console.log('Checking your system...');
  let match = true;
  if (Math.ceil(os.totalmem() / Math.pow(1024, 3)) < 4) {
    console.log('This app needs at least 4 GB of RAM.');
    match = false;
  }
  if (os.cpus().length < 2) {
    console.log('Processor is not supported.');
    match = false;
  }

  if (match) {
    console.log('System is checked successfully.')
  }
}

// checkSystem();


// version 2:

var Promise = require('promise');

const checkSystem2 = () => {
  console.log('Checking your system...');
  return new Promise((resolve, reject) => {
    let match = true;
    if (Math.ceil(os.totalmem() / Math.pow(1024, 3)) < 4) {
      reject('This app needs at least 4 GB of RAM.');
      match = false;
    }
    if (os.cpus().length < 2) {
      reject('Processor is not supported.');
      match = false;
    }

    if (match) {
      resolve('System is checked successfully.')
    }
  })
}

// version 3:

const Rx = require('rxjs');

let promise =  new Promise((resolve, reject) => {
  let match = true;
  if (Math.ceil(os.totalmem() / Math.pow(1024, 3)) < 4) {
    reject('This app needs at least 4 GB of RAM.');
    match = false;
  }
  if (os.cpus().length < 2) {
    reject('Processor is not supported.');
    match = false;
  }
  if (match) {
    resolve('System is checked successfully.')
  }
});
Rx.from(promise).subscribe(
  (msg) => console.log(msg),
  (error) => console.log(error),
  () => console.log('completed!'));
