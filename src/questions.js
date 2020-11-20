const inquirer = require("inquirer");

const promptUserManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the managers name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is the managers employee ID?",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter an ID!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "name",
      message: "What is the managers name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter aname!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is the managers email?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter an email!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "number",
      message: "What is the managers office number?",
      validate: (numberInput) => {
        if (numberInput) {
          return true;
        } else {
          console.log("Please enter a number!");
          return false;
        }
      },
    },
  ]);
};

exports.promptUserManager = promptUserManager;
