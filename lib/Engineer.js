const Employee = require("./Employee");
class Engineer extends Employee {
  constructor(theName, theId, theEmail, theGithub) {
    super([theName, theId, theEmail]);
    this.github = theGithub;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
