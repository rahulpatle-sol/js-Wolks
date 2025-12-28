const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let counter = 0;

// Functions for logic
function add(current) { return current + 1; }
function sub(current) { return current - 1; }

console.log("-------------------------------");
console.log("WELCOME TO NATIVE COUNTER CLI");
console.log("-------------------------------");

// Ek function banate hain taaki hum isse baar-baar call kar sakein (Recursion)
function askUser() {
    console.log(`\nCurrent Count: ${counter}`);
    
    rl.question("Type '+' to increase, '-' to decrease, or 'exit' to quit: ", (input) => {
        if (input === "+") {
            counter = add(counter);
            askUser(); // Phir se pucho
        } else if (input === "-") {
            counter = sub(counter);
            askUser(); // Phir se pucho
        } else if (input.toLowerCase() === "exit") {
            console.log("Final Count was: " + counter);
            rl.close();
        } else {
            console.log("Invalid input! Try again.");
            askUser();
        }
    });
}

// Start the counter
askUser();

rl.on("close", () => {
    console.log("BYE BYE !!!");
    process.exit(0);
});