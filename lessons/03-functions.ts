export {};
/**
 * Lesson 03: Functions and Arrow Functions
 * 
 * In this lesson you will learn:
 * - Function parameter types
 * - Return type annotations
 * - Optional parameters in functions
 * - Arrow functions in TypeScript
 *
 * Safe functions are the heart of a bug-free frontend!
 * 
 * How to run this lesson:
 * npm run lesson:03
 */

// --- 1. Basic Function Annotations ---
// We define types for parameters AND the return value.
function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}

const total = calculateTotal(10, 5);
console.log(`Total Price: $${total}`);

// --- 2. Void and Never ---
// 'void' is used when a function returns nothing.
function logMessage(message: string): void {
  console.log(`LOG: ${message}`);
}

logMessage("TypeScript functions are awesome!");

// --- 3. Optional Parameters ---
// Just like in interfaces, use '?' for optional parameters.
// Note: Optional parameters must come AFTER required ones.
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  }
  return `Hello, ${name}!`;
}

console.log(greet("Abdul"));
console.log(greet("Abdul", "Good morning"));

// --- 4. Arrow Functions ---
// The syntax is very similar to naming variables.
const multiply = (a: number, b: number): number => a * b;

// --- 5. Try It Yourself ---
// 1. Create a function 'formatCurrency' that takes a number and returns a string (e.g., "$10.00").
// 2. Create an arrow function 'isEven' that takes a number and returns a boolean.

// WRITE YOUR CODE HERE:


// --- 6. Mini Challenge ---
/**
 * Create a function 'searchUsers' that takes:
 * - query (string)
 * - limit (number - optional, default to 10)
 * 
 * It should return a string like: "Searching for 'search-term' with limit 10".
 * 
 * Hint: You can use default parameters: 'limit: number = 10'
 */

// YOUR CHALLENGE SOLUTION:

