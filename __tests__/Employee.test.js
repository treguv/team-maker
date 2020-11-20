const Employee = require("../lib/Employee");

test("create an employee object", () => {
  const employee = new Employee("John", "1234", "john@gmail.com");

  expect(employee.name).toBe("John");
  expect(employee.id).toBe("1234");
  expect(employee.email).toBe("john@gmail.com");
});

test("Test getId", () => {
  const employee = new Employee("John", "1234", "john@gmail.com");
  expect(employee.getId()).toBe("1234");
});

test("Test getName", () => {
  const employee = new Employee("John", "1234", "john@gmail.com");
  expect(employee.getName()).toBe("John");
});

test("Test getId", () => {
  const employee = new Employee("John", "1234", "john@gmail.com");
  expect(employee.getEmail()).toBe("john@gmail.com");
});
