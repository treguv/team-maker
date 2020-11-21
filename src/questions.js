const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");
const writeHtml = require("../src/writeHTML");
const writeHTML = require("../src/writeHTML");
//THis will store everything until it is ready to be written
let pageContents = "";
//Add the manager
const promptUserManager = () => {
  //make empty page and write to it
  writeHtml.makeEmpty();
  pageContents = pageContents + writeHtml.writeBeggining();
  //console.log(pageContents);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Manager's name?",
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
        message: "What is the Manager's employee ID?",
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
        name: "email",
        message: "What is the Manager's email?",
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
        message: "What is the Manager's office number?",
        validate: (numberInput) => {
          if (numberInput) {
            return true;
          } else {
            console.log("Please enter a number!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const createdManager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.number
      );
      //console.log(createdManager);
      pageContents = pageContents + writeHtml.writeEmployee(createdManager);
      //call function that will ask them to choose who next
      addNext();
      return createdManager;
    });
};
// add the engineer
const promptUserEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Engineer's name?",
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
        message: "What is the Engineer's employee ID?",
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
        message: "What is the Engineer's name?",
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
        name: "email",
        message: "What is the Engineer's email?",
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
        name: "github",
        message: "What is the Engineer's github username?",
        validate: (usernameInput) => {
          if (usernameInput) {
            return true;
          } else {
            console.log("Please enter a username!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const createdEngineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      pageContents = pageContents + writeHtml.writeEmployee(createdEngineer);
      console.log(createdEngineer);
      addMore();
    });
};

// add the intern
const promptUserIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Intern's name?",
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
        message: "What is the Intern's employee ID?",
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
        message: "What is the Intern's name?",
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
        name: "email",
        message: "What is the Intern's email?",
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
        name: "school",
        message: "What is the Intern's school?",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter a school!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const createdIntern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      pageContents = pageContents + writeHtml.writeEmployee(createdIntern);
      console.log(createdIntern);
      addMore();
    });
};
const addNext = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "next",
        message: "Who do you want to add next?",
        choices: ["Engineer", "Intern"],
      },
    ])
    .then((answer) => {
      if (answer.next === "Engineer") {
        promptUserEngineer();
      } else {
        promptUserIntern();
      }
    });
};

const addMore = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "more",
        message: "Would you like to add more members?",
        choices: ["Yes", "No"],
      },
    ])
    .then((answer) => {
      if (answer.more === "Yes") {
        addNext();
      } else {
        //Write the closing part of the webpage
        pageContents = pageContents + writeHTML.writeEnd();
        fs.writeFile("./dist/index.html", pageContents, (err) => {
          if (err) {
            console.log(err);
          }
        });
        console.log("Your team creation is finished!");
      }
    });
};
exports.promptUserManager = promptUserManager;
exports.promptUserEngineer = promptUserEngineer;
exports.promptUserIntern = promptUserIntern;
exports.addNext = addNext;
