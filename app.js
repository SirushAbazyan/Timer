const moment = require("moment");
const fs = require("fs");

function timer() {
    let time = moment().format("MMMM Do YYYY, h:mm:ss a");
    let stream = fs.createWriteStream("./time.txt");
    stream.write(time, err => {
        if(err) console.log(err.message);
    });
}
setInterval(timer, 1000);