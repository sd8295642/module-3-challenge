// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  const employees = [];

  const employee = createEmployee();
  employees.push(employee);

  while (confirm("Would you like to add another employee?")) {
    const employee = createEmployee();
    employees.push(employee);
  }
  return employees;
};
    function createEmployee() {
    const employee = {
      firstName: "",
      lastName: "",
      salary: 0
    };

    employee.firstName = prompt("Employee's first name: ")
    employee.lastName = prompt("Employee's last name: ")
    employee.salary = prompt("Employee's salary: ")

    if (isNaN(employee.salary) || employee.salary < 0) {
      employee.salary = 0;
    }
    else {
      employee.salary = parseInt(employee.salary);
    }

  return employee;
  };


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < employeesArray.length; i++) {
    let employeeSalaryValue = parseInt(employeesArray[i].salary);
    sum += employeeSalaryValue;
    count ++;
  };
  return console.log(`Average employee salary is: ${sum/count}`);
};

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  let r = Math.floor(Math.random() * employeesArray.length);
  let randomEmployee = employeesArray[r].firstName + " " + employeesArray[r].lastName;

  return console.log(`Congratulations, ${randomEmployee}, you have randomly won`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
