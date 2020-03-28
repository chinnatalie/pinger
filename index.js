const schedule = require('node-schedule');

const ping = schedule.scheduleJob('30 * * * *', function () {
    console.log('The answer to life, the universe, and everything!');
});