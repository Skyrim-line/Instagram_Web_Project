// const { convertDate } = require("./date");
// const dt = new Date();
// const newDT = convertDate(dt);
// console.log("newDT", newDT);

const moment = require("moment");
const newDT = moment().format("YYYY-MM-DD hh:mm:ss");
console.log("newDT", newDT); // 2023-08-19 10:13:21
