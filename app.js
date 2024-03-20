#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let again = true;
while (again) {
    let userAns = await inquirer.prompt([
        {
            type: "number",
            name: "num1",
            message: "Enter Number 1: ",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter Number 2: ",
        },
        {
            type: "list",
            name: "operation",
            message: "Enter Operation to perform: ",
            choices: ["addition", "subtraction", "division", "multiplication"],
        },
    ]);
    let operations = {
        addition: (a, b) => a + b,
        subtraction: (a, b) => a - b,
        division: (a, b) => a / b,
        multiplication: (a, b) => a * b,
    };
    if (!isNaN(userAns.num1) && !isNaN(userAns.num2)) {
        let result2 = operations[userAns.operation](userAns.num1, userAns.num2);
        console.log(chalk.bgYellow.black.bold(`${userAns.operation} of ${userAns.num1} and ${userAns.num2} is ${result2}`));
        let againtry = await inquirer.prompt({
            type: "list",
            name: "tryagain",
            message: "again?",
            choices: ["yes", "no"],
        });
        again = againtry.tryagain === "yes";
        // againtry.tryagain === 'no'? again = false : again = true
    }
    else {
        console.log(chalk.bgRed.white("Enter valid number!"));
    }
}
