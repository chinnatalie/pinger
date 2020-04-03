const request = require('request');

const FREQ_IN_MIN = 2;

const ping = url => setInterval(() => {
    request.get({
        url: url
    }, () => console.log('PINGED ' + url));
}, FREQ_IN_MIN * 60 * 1000);

exports.ping = ping;