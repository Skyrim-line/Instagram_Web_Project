const fs = require("fs");
//path,utf8,callback
fs.readFile("./files/1.txt", "utf8", (err, data) => {
  // read succeed, err is null
  // read failed, data is undefined, err is a object
  console.log("data", data);
  console.log("err", err);
  if (err) {
    return console.error("err", err);
  }
  console.log("data", data);
});
