import inquirer from "inquirer";
console.log(`\t\t\t\t\t\tWelcome to XYZ Bank Limited`);
console.log(`\t\t\t\t\t\t===========================`);
let balance:number=10000;
console.log(`Your current balance is: ${balance}`);
const answer = await inquirer.prompt([
    {
        message: "Enter your pin number:",
        type: "number",
        name: "pin_code"
    }
]);
if (answer.pin_code === 1211) {
    console.log(`Correct Pin Code`);
    const answer = await inquirer.prompt([
        {
            message: "What do you want to do?",
            type: "list",
            name:"transaction",
            choices: ["withdraw","check balance","fast cash"]
        }
    ]);
    if (answer.transaction === "withdraw") {
        const answer = await inquirer.prompt([
            {
                message: "Enter Amount:",
                type: "number",
                name: "amount"
            }
            ]);
            if(answer.amount > balance){
                console.log(`Insufficient Balance`);
            }else{
                let remain: number=balance - answer.amount;
                console.log(`Your remaining balance is: ${remain}`);
            }
    }
    else if(answer.transaction === "check balance"){
        console.log(`Your curent balance is ${balance}`);
    }
    else if(answer.transaction === "fast cash"){
        const answer = await inquirer.prompt([
            {
                message: "Select amount to withdraw:",
                type: "list",
                name:"select_amount",
                choices:["1000","5000","10000","15000","20000","25000"]
            }
        ]);
        if(answer.select_amount > balance){
            console.log(`Insufficient Balance`);
        }else{
            let auto_remain:number= balance - answer.select_amount;
            console.log(`Your remaining balance is: ${auto_remain}`);
        }
    }
}else{
    console.log(`Incorrect Pin Code`);
};