const request = require('request');

const serverUrl = 'HEROKU URL HERE';

setInterval(() => {
    request.get({
        url: serverUrl
    }, () => console.log('PINGED ' + serverUrl));
}, 30 * 60 * 1000);