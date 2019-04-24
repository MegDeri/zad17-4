var os = require('os');

function convertTime(num) {

    var hour = Math.floor(num / 3600);
    var minute = Math.floor(num % 3600 / 60);
    var seconds = Math.floor(num % 3600 / 60);
    var hShow = hour > 0 ? hour + (hour == 1 ? " hour, " : " hours, ") : "";
    var minShow = minute > 0 ? minute + (minute == 1 ? " minute, " : " minutes, ") : "";
    var secShow = seconds > 0 ? seconds + (seconds == 1 ? " second" : " seconds") : "";
    return hShow + minShow + secShow; 
};

  exports.print2 = convertTime;
