const Employee = require("./Employee");
class Intern extends Employee {
  constructor(theName, theId, theEmail, theSchool) {
    super([theName, theId, theEmail]);
    this.school = theSchool;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}
module.exports = Intern;
