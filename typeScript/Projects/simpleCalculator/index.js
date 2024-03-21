import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    { message: "select one of the operators to perform an operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
console.log(answer);
// conditional statements:
if (answer.operator === "Addition") {
    console.log(`your answer is: ${answer.firstNumber + answer.secondNumber}`);
}
else if (answer.operator === "Subtraction") {
    console.log(`your answer is: ${answer.firstNumber - answer.secondNumber}`);
}
else if (answer.operator === "Multiplication") {
    console.log(`your answer is: ${answer.firstNumber * answer.secondNumber}`);
}
else if (answer.operator === "Division") {
    console.log(`your answer is: ${answer.firstNumber / answer.secondNumber}`);
}
else {
    console.log("Please select a valid operator");
}
