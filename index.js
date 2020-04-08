const {ping} = require('./src/ping');
const fs = require('fs');

try {
    const serverUrls = fs.readFileSync('./input.txt', 'utf8').split("\n");
    serverUrls.forEach(url => ping(url));
} catch (err) {
    console.error('input.txt not found');
}