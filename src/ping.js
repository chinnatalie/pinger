const request = require('request');

const FREQ_IN_MIN = 30;

const ping = url => {
    console.log('Starting '+ FREQ_IN_MIN + '-min pings to: ' + url);
    setInterval(() => {
        request.get({
            url: url
        }, () => console.log('PINGED ' + url));
    }, FREQ_IN_MIN * 60 * 1000);
};

exports.ping = ping;