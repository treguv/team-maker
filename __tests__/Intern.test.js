const Intern = require("../lib/Intern");
const intern = new Intern("John", "1234", "john@gmail.com", "UWS");
test("create a engineer object", () => {
  expect(intern.name).toBe("John");
  expect(intern.id).toBe("1234");
  expect(intern.email).toBe("john@gmail.com");
  expect(intern.school).toBe("UWS");
});

test("test getRole method", () => {
  expect(intern.getRole()).toBe("Intern");
});
