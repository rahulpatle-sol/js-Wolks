//  this file contains examples of operators in javascript
//  
// javascript  is highly conflict prone language, and it's important to understand the different types of operators available in the language.
//  1 assingment operator 
// jus
// 
 const obj = {};

obj.x = 3;
console.log(obj.x); // Prints 3.
console.log(obj); // Prints { x: 3 }.

const key = "y";
obj[key] = 5;
console.log(obj[key]); // Prints 5.
console.log(obj); // Prints { x: 3, y: 5 }.

// JavaScript



// --- 1. ARITHMETIC OPERATORS ---
console.log("--- Arithmetic ---");
let a = 10;
let b = 3;

console.log("Addition (10 + 3):", a + b);       // 13
console.log("Subtraction (10 - 3):", a - b);    // 7
console.log("Multiplication (10 * 3):", a * b); // 30
console.log("Division (10 / 3):", a / b);       // 3.333...
console.log("Remainder/Modulo (10 % 3):", a % b); // 1 (10 divided by 3 has a remainder of 1)
console.log("Exponent (10^3):", a ** b);        // 1000


// --- 2. ASSIGNMENT OPERATORS ---
console.log("\n--- Assignment ---");
let x = 5; 
x += 5; // Same as x = x + 5
console.log("Add & Assign (5 + 5):", x); // 10

x *= 2; // Same as x = x * 2
console.log("Multiply & Assign (10 * 2):", x); // 20


// --- 3. COMPARISON OPERATORS ---
console.log("\n--- Comparison ---");
let val = 5;
let strVal = "5";

console.log("Loose Equality (5 == '5'):", val == strVal);   // true (ignores type)
console.log("Strict Equality (5 === '5'):", val === strVal); // false (checks type)
console.log("Not Equal (5 !== 10):", val !== 10);           // true
console.log("Greater than (10 > 5):", 10 > 5);             // true


// --- 4. LOGICAL OPERATORS ---
console.log("\n--- Logical ---");
let hasCoffee = true;
let isTired = true;
let isWeekend = false;

// AND (Both must be true)
console.log("Should work? (Tired AND Coffee):", isTired && hasCoffee); // true

// OR (At least one must be true)
console.log("Should rest? (Weekend OR Tired):", isWeekend || isTired); // true

// NOT (Inverts the value)
console.log("Not Weekend:", !isWeekend); // true


// --- 5. TERNARY OPERATOR (Shorthand If/Else) ---
console.log("\n--- Ternary ---");
let userAge = 20;
let canVote = (userAge >= 18) ? "Yes, you can vote!" : "No, too young.";
console.log("Voting status:", canVote);


// --- 6. NULLISH COALESCING (??) ---
console.log("\n--- Nullish Coalescing ---");
let savedVolume = null;
let defaultVolume = 50;

// Returns default if savedVolume is null or undefined
let currentVolume = savedVolume ?? defaultVolume;
console.log("Current Volume:", currentVolume); // 50


// --- 7. STRING OPERATOR ---
console.log("\n--- Strings ---");
let firstName = "Gemini";
let lastName = "AI";
console.log("Concatenation:", firstName + " " + lastName); //