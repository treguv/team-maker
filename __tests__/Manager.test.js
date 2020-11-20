const Manager = require("../lib/Manager");
const manager = new Manager("John", "1234", "john@gmail.com", "253-234-2442");
test("create a manager object", () => {
  //const manager = new Manager("John", "1234", "john@gmail.com", "253-234-2442");

  expect(manager.name).toBe("John");
  expect(manager.id).toBe("1234");
  expect(manager.email).toBe("john@gmail.com");
  expect(manager.officeNumber).toBe("253-234-2442");
});

test("test getRole method", () => {
  expect(manager.getRole()).toBe("Manager");
});
