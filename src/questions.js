const inquirer = require("inquirer");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");
//Add the manager
const promptUserManager = () => {
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
      console.log(createdManager);
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
        console.log("Your team creation is finished!");
      }
    });
};
exports.promptUserManager = promptUserManager;
exports.promptUserEngineer = promptUserEngineer;
exports.promptUserIntern = promptUserIntern;
exports.addNext = addNext;
