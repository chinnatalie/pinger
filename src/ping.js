const request = require('request');
const moment = require('moment');

const FREQ_IN_MIN = 30;

const ping = url => {
    console.log('Starting '+ FREQ_IN_MIN + '-min pings to: ' + url);
    setInterval(() => {
        const currMoment = moment(Date.now());
        if(currMoment.hour() < 1 && currMoment.hour() > 8) {
            request.get({
                url: url
            }, () => console.log('PINGED ' + url));
        }
    }, FREQ_IN_MIN * 60 * 1000);
};

exports.ping = ping;
