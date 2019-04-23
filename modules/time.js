var os = require('os');

function convertTime(uptime) {
    var uptime = os.uptime(); 

    var hour = Math.floor(uptime / 3600);
    var minute = Math.floor((uptime - ( hour * 3600)) / 60);
    var seconds = uptime - (hour * 3600) -(minute * 60);
        return {h: hour, min: minute, sec: seconds};
};

  exports.print = convertTime;