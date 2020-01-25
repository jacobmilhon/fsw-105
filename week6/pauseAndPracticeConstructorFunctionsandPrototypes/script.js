//array of all employees
let employees = [];

//constructor for employee information
function Employee(name, jobTitle, salary, status = "Full Time") {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
};
Employee.prototype.printEmployeeForm = function() {
    console.log("Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: $" + this.salary + "/year, Status: " + this.status);
};

//Creating the employees
let jake = new Employee("Jake", "Developer", 75000, "Part Time");
let bob = new Employee("Bob", "Programmer", 100001);
let kim = new Employee("Kimberly", "Assistant", 30000);
jake.printEmployeeForm();
bob.printEmployeeForm();
kim.printEmployeeForm();

//pushing employee information to array
function addEmployeeToArray(emp) {
    employees.push(emp);
}
addEmployeeToArray(jake);
addEmployeeToArray(bob);
addEmployeeToArray(kim);

console.log(employees);