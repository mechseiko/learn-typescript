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

console.log('lesson 05-functions');

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
 * Functions are used for component rendering, event handling, and data fetching.
 * Below is an example of an event handler function typed for a button click.
 */
type ButtonVariant = "primary" | "secondary" | "danger";

function createButton(label: string, variant: ButtonVariant, onClick: (event: string) => void) {
    console.log(`Creating [${variant.toUpperCase()}] button: ${label}`);
    
    // Simulating a click event
    const fakeEventMessage = `Clicked at ${new Date().toISOString()}`;
    onClick(fakeEventMessage);
}

// Pass an arrow function that matches the (event: string) => void signature
createButton("Delete Account", "danger", (eventDetails) => {
    console.warn("User attempted to delete account.", eventDetails);
});

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


/**
 * --- SOLUTIONS ---
 */
// 1. function multiply(a: number, b: number): number { return a * b; }
// 2. function getFullName(f: string, l: string): string { return `${f} ${l}`; }
// 3. function checkLogin(isLogged: boolean): string { return isLogged ? "Welcome" : "Please log in"; }
