const Employee = require("./Employee");
class Manager extends Employee {
  constructor(theName, theId, theEmail, theOfficeNumber) {
    super([theName, theId, theEmail]);
    this.officeNumber = theOfficeNumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
