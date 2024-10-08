// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  for (let salary of array) {
    newEmployeeSalaries.push(operation(salary));
  }
}

function addSalary(salary) {
  return salary + 5000;
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here
forEach(employeeSalaries, addSalary);

console.log(newEmployeeSalaries);
