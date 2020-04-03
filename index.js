const {ping} = require('./src/ping');
const fs = require('fs');

try {
    const serverUrl = fs.readFileSync('./input.txt', 'utf8');
    ping(serverUrl);
} catch (err) {
    console.error('input.txt not found');
}