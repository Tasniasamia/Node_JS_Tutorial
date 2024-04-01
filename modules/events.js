const Event = require('events');

const eventObj = new Event();
const callComing = () => {
console.log('Call is coming');
eventObj.emit('vibratePhone');
};

module.exports = {
eventObj,
callComing,

};
