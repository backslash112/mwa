// Question 4:
// Using Node Stream API, create a script to:
// * Zip a file using Gzip algorithm
// * Unzip a file using Gunzip algorithm
// (Use zlib core library)

'use strict';

const zlib = require('zlib');
const fs = require('fs');

// image to .gz file
const input = fs.createReadStream('vacation.jpg');
const output = fs.createWriteStream('vacation.jpg.gz');
input.pipe(zlib.createGzip()).pipe(output);


// .gz file to image
const zipFile = fs.createReadStream('vacation.jpg.gz');
const image = fs.createWriteStream('newVacation.jpg');
zipFile.pipe(zlib.createGunzip()).pipe(image);
