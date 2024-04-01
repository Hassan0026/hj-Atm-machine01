#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 3344;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"],
        }
    ]);
    if (operationAns.operation == "fast cash") {
        let amountfastcash = await inquirer.prompt([{
                name: "fastcash",
                message: "Select the amount you want to withdraw",
                type: "list",
                choices: [500, 1000, 5000, 10000],
            }
        ]);
        console.log(`Your remaining balance is ${myBalance - amountfastcash.fastcash}Rs.`);
    }
    else if (operationAns.operation === "check balance") {
        console.log("your balance is:" + myBalance);
    }
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        myBalance -= amountAns.amount;
        if (operationAns.withdraw <= myBalance) {
            console.log(`you withdraw ${operationAns.withdraw}`);
            console.log(`your remaining balance is ${myBalance - operationAns.withdraw}Rs.`);
        }
        else {
            console.log(`You don't have enough balance`);
        }
        ;
    }
    else if (operationAns.operation === "check balance") {
        console.log("your balance is:" + myBalance);
    }
}
else {
    console.log("Incorrect pin number");
}
