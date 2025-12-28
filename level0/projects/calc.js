const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// --- Functions (Logic) ---
// Note: Hum parameters pass karenge taaki functions independent rahein
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const multi = (a, b) => a * b;
const div = (a, b) => {
    if (b === 0) return "Error: Division by zero!";
    return a / b;
};

console.log("--- Welcome to Native JS CLI Calculator ---");

// Step 1: Input 1
rl.question("Enter first number: ", (num1) => {
    // Step 2: Input 2
    rl.question("Enter second number: ", (num2) => {
        // Step 3: Choose Operation
        rl.question("Choose operation (+, -, *, /): ", (op) => {
            
            // Numbers string mein aate hain, isliye parseFloat zaroori hai
            let n1 = parseFloat(num1);
            let n2 = parseFloat(num2);
            let result;

            // --- Conditional Logic for Calculator ---
            if (op === "+") {
                result = add(n1, n2);
            } else if (op === "-") {
                result = sub(n1, n2);
            } else if (op === "*") {
                result = multi(n1, n2);
            } else if (op === "/") {
                result = div(n1, n2);
            } else {
                result = "Invalid Operator!";
            }

            console.log(`\nResult: ${n1} ${op} ${n2} = ${result}`);
            rl.close();
        });
    });
});

rl.on("close", function() {
    console.log("\nThanks for using Calc! BYE BYE !!!");
    process.exit(0);
});