class Employee {
  constructor([theName, theId, theEmail]) {
    this.name = theName;
    this.id = theId;
    this.email = theEmail;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
