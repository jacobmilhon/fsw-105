const readline = require("readline-sync");

let firstNumber = readline.questionInt("Please enter your first number: ");
let secondNumber = readline.questionInt("Please enter your second number: ");
let selectedOperator = readline.question("Please enter the operation to perform: add, sub, mul, div: ");

if(selectedOperator == "add") {
    console.log(add(firstNumber, secondNumber));
} else if(selectedOperator == "sub") {
    console.log(sub(firstNumber, secondNumber));
} else if(selectedOperator == "mul") {
    console.log(mul(firstNumber, secondNumber));
} else if(selectedOperator == "div") {
    console.log(div(firstNumber, secondNumber));
};

function add(num1, num2) {
    return num1 + num2;
};

function sub(num1, num2) {
    return num1 - num2;
};

function mul(num1, num2) {
    return num1 * num2;
};

function div(num1, num2) {
    return num1 / num2;
};