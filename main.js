#! /usr/bin/env node
import inquirer from "inquirer";
// Initialize user balance and pin code
let myBalance = 10000;
let myPin = 1234;
// print welcome message
console.log("Welcome to code with Najma  - ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin is correct, Login Successfully!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an option:",
            choices: ["withdraw Amount", "check balance"],
        },
    ]);
    if (operationAns.operation === "withdraw Amount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "select A withdrawal method:",
                choices: ["Fast Cash", "Enter Amount"],
            },
        ]);
        if (withdrawAns.withdrawMethod === "Fast Cash") {
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastcash",
                    type: "list",
                    message: "Select Amount:",
                    choices: [1000, 2000, 5000, 10000, 20000, 50000],
                },
            ]);
            if (fastCashAns.fastcash > myBalance) {
                console.log("Insufficient Balance");
            }
            else {
                myBalance -= fastCashAns.fastcash;
                console.log(`${fastCashAns.fastcash} withdraw successfully`);
                console.log(`your remaining balance is: ${myBalance}`);
            }
        }
        else if (withdrawAns.withdrawMethod === "Enter Amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "enter your amount to withdraw",
                },
            ]);
            if (amountAns.amount > myBalance) {
                console.log("Insufficient Balance!");
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} Withdraw Successfully`);
                console.log(`Your remaining balance is: ${myBalance}`);
            }
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your Account balance is: ${myBalance}`);
    }
}
else {
    console.log("Pin is Incorrect,Try again!");
}
