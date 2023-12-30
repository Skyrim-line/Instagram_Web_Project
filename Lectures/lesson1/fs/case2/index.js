//output  GACM
const fs = require("fs");

//read content from input.txt
fs.readFile("./input.txt", "utf8", (err, content) => {
  if (err) {
    console.error("Read file failed", err);
    return;
  }
  console.log("content", content);
  //George Andrew Chris Martin
  const output = content
    .split(" ")
    .map((word) => {
      return word[0];
    })
    .join("");

  console.log("output", output);
  //write output to output.txt
  fs.writeFile("./output.txt", output, (err) => {
    if (err) {
      console.error("Write file failed", err);
      return;
    }
    console.log("Content saved successfully");
  });
});
