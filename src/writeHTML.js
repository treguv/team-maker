const fs = require("fs");

//Write an empty template html file  into the directory
const makeEmpty = () => {
  fs.writeFile("./dist/index.html", "", (err) => {
    if (err) {
      console.log(err);
    }
  });
};

module.exports = {
  makeEmpty: makeEmpty,
};
