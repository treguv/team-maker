const fs = require("fs");

//Write an empty template html file  into the directory
const makeEmpty = () => {
  fs.writeFile("./dist/index.html", "", (err) => {
    if (err) {
      console.log(err);
    }
  });
};

const writeBeggining = () => {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />

    <title>My Team</title>
  </head>
  <header class="bg-danger">
    <h3 class="text-center py-5">My Team</h3>
  </header>
  <body>
    <!-- This is where the cards for the team would go -->
    <div class="container-fluid">
      <div class="row">
        <!-- This is where the actual cards need to go -->
    `;
};

const writeEnd = () => {
  return `
    </div>
    </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script
      src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
    `;
};

const writeEmployee = (employee) => {
  //We can write the general things for the employees
  let role = employee.getRole();
  let employeeCard = `
  <!-- Card-->
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body bg-primary">
        <h5 class="card-title">${role}</h5>
        <div class="card-text">${employee.name}</div>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${employee.id}</li>
        <a href = "mailto:${employee.email}?"> <li class="list-group-item">Email: ${employee.email}</li></a>`;
  //here we can figure out what employee we have
  let title, unique;
  if (role === "Manager") {
    title = "Office Number";
    unique = employee.officeNumber;
    employeeCard =
      employeeCard +
      `
  <li class="list-group-item">${title}:${unique}</li>`;
  } else if (role === "Intern") {
    title = "School";
    unique = employee.school;
    employeeCard =
      employeeCard +
      `
  <li class="list-group-item">${title}:${unique}</li>`;
  } else {
    title = "Github Username";
    unique = employee.github;
    employeeCard =
      employeeCard +
      `
    <a href ="http://www.github.com/${unique}"> <li class="list-group-item">${title}:${unique}</li></a>`;
  }
  employeeCard =
    employeeCard +
    `
    </ul>
    </div>
    </div>`;
  return employeeCard;
};
module.exports = {
  makeEmpty: makeEmpty,
  writeBeggining: writeBeggining,
  writeEnd: writeEnd,
  writeEmployee: writeEmployee,
};
