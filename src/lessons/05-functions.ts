export {};
/**
 * LESSON 05
 * Functions in TypeScript
 * 
 * Goal:
 * Learn how to type function parameters and return values.
 * 
 * How to run:
 * npm run lesson:05
 */

/**
 * Functions are the core of logic. 
 * TS ensures you pass the right arguments and use the return value correctly.
 */

/**
 * BASIC EXAMPLE
 */
function add(a: number, b: number): number {
    return a + b;
}

// add(2, '') returns an error.

/**
 * FRONTEND EXAMPLE
 */
function formatPrice(price: number, currency: string = "$"): string {
    return `${currency}${price.toFixed(2)}`;
}

console.log(formatPrice(19.99));
console.log(formatPrice(10, "£"));

/**
 * COMMON MISTAKES
 */
function greet(name: string) {
    // return 42; // ❌ Should logically return a string based on usage context
}

/**
 * PRACTICE CHALLENGES
 */

// 1. Create a function that multiplies two numbers.


// 2. Create a function that returns a user's full name (first + last).


// 3. Create a function that checks if a user is logged in (receives boolean, returns string).


console.log("Lesson 05 Complete! 🚀");

/**
 * --- SOLUTIONS ---
 */
// 1. function multiply(a: number, b: number): number { return a * b; }
// 2. function getFullName(f: string, l: string): string { return `${f} ${l}`; }
// 3. function checkLogin(isLogged: boolean): string { return isLogged ? "Welcome" : "Please log in"; }
