/**
 * JAVASCRIPT CONDITIONAL LOGIC MASTER FILE
 */

// 1. THE "IF/ELSE" PATTERN (The Foundation)
let temperature = 30;

console.log("--- If/Else Logic ---");
if (temperature > 35) {
    console.log("It's scorching outside!");
} else if (temperature >= 20 && temperature <= 35) {
    // Uses Logical AND (&&) to check a range
    console.log("The weather is pleasant.");
} else {
    console.log("It's a bit chilly.");
}


// 2. THE TERNARY OPERATOR (The Quick Decision)
// Syntax: condition ? expressionIfTrue : expressionIfFalse
console.log("\n--- Ternary Operator ---");
let userRole = "admin";
let accessMessage = (userRole === "admin") ? "Access Granted: Welcome Master" : "Access Denied: Limited User";
console.log(accessMessage);


// 3. LOGICAL SHORT-CIRCUITING (The Pro Way)
console.log("\n--- Short-Circuiting ---");
let isLoggedIn = true;

// The && operator only runs the second part if the first part is TRUE
isLoggedIn && console.log("User is logged in, showing dashboard...");

// The || operator provides a fallback (Default values)
let inputName = ""; // Empty string is 'falsy'
let displayName = inputName || "Anonymous User";
console.log("Profile Name:", displayName);


// 4. SWITCH STATEMENT (The Multi-Choice)
console.log("\n--- Switch Case ---");
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the work week!");
        break;
    case "Friday":
        console.log("Weekend is almost here!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend!");
        break;
    default:
        console.log("Just another mid-week day.");
}


// 5. TRUTHY VS FALSY (How JS decides what is 'true')
console.log("\n--- Truthy vs Falsy ---");
let itemsInCart = 0;

if (itemsInCart) { 
    // This won't run because 0 is "Falsy"
    console.log("You have items!");
} else {
    console.log("Your cart is empty.");
}