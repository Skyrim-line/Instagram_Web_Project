const fs = require("fs");

fs.readFile("./source.js", "utf8", (err, content) => {
  if (err) {
    console.error("Read file failed", err);
    return;
  }
  fs.writeFile("./source2.js", content, (err) => {
    if (err) {
      console.error("Write file failed", err);
      return;
    }
    console.log("Content copied successfully");
  });
});
