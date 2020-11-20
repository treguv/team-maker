const Engineer = require("../lib/Engineer");
const engineer = new Engineer("John", "1234", "john@gmail.com", "gittyman");
test("create a engineer object", () => {
  //const engineer = new engineer("John", "1234", "john@gmail.com", "253-234-2442");

  expect(engineer.name).toBe("John");
  expect(engineer.id).toBe("1234");
  expect(engineer.email).toBe("john@gmail.com");
  expect(engineer.github).toBe("gittyman");
});

test("test getRole method", () => {
  expect(engineer.getRole()).toBe("Engineer");
});
