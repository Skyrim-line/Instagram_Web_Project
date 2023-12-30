const fs = require("fs");

fs.writeFile("./files/3.txt", "I like node", (err) => {
  //write succeed, err is null
  //write failed, err is object
  console.log("err", err);
  if (err) {
    return console.log("err", err);
  }
  console.log("Write file succeed");
});
