/*
Filename: complex_code.js
Description: This file contains an elaborate and complex JavaScript code that demonstrates advanced concepts and techniques.
*/

// Define a class named "Person"
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Define a subclass of "Person" named "Employee"
class Employee extends Person {
  constructor(firstName, lastName, department, salary) {
    super(firstName, lastName);
    this.department = department;
    this.salary = salary;
  }

  promote(newDepartment) {
    this.department = newDepartment;
    console.log(`${this.getFullName()} has been promoted to ${newDepartment} department.`);
  }

  static calculateAnnualBonus(salary) {
    return salary * 0.1;
  }
}

// Create an instance of "Employee"
const johnDoe = new Employee("John", "Doe", "IT", 50000);

console.log(johnDoe.getFullName()); // Output: John Doe

johnDoe.promote("Engineering"); // Output: John Doe has been promoted to Engineering department.

const annualBonus = Employee.calculateAnnualBonus(johnDoe.salary);
console.log(`Annual bonus for ${johnDoe.getFullName()}: $${annualBonus}`); // Output: Annual bonus for John Doe: $5000

// More code and advanced techniques can be added below...