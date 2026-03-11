export {};
/**
 * LESSON 06
 * Advanced Function Types
 * 
 * Goal:
 * Master complex function signatures, overloads, and special return types.
 * 
 * How to run:
 * npm run lesson:06
 */

/**
 * Beyond basic types, you can define specific shapes for functions (Function Type Expressions)
 * and even describe multiple ways a function can be called (Overloads).
 */

/**
 * BASIC EXAMPLE
 */
type GreetFn = (name: string) => string;

const sayHello: GreetFn = (name) => `Hello, ${name}`;

// void vs never
function logMessage(msg: string): void {
    console.log(msg);
}

function throwError(msg: string): never {
    throw new Error(msg);
}

/**
 * FRONTEND EXAMPLE
 */
// Function Overloads
function handleEvent(name: "click"): void;
function handleEvent(name: "change", value: string): void;
function handleEvent(name: string, value?: string): void {
    console.log(`Event: ${name}, Value: ${value}`);
}

handleEvent("click");
handleEvent("change", "New input");

/**
 * COMMON MISTAKES
 */
function processValue(val: string): number {
    return val.length;
}
// let result: string = processValue("test"); // ❌ Error: Type 'number' is not assignable to type 'string'.

/**
 * PRACTICE CHALLENGES
 */

// 1. Create a function type expression for a math operation (two numbers in, one number out).


// 2. Create a function that returns 'void' and logs a user logout message.


// 3. (Advanced) Try creating a simple function overload for a 'format' function (string or number input).


console.log("Lesson 06 Complete! 🚀");

/**
 * --- SOLUTIONS ---
 */
// 1. type Operation = (a: number, b: number) => number;
// 2. function logout(): void { console.log("User logged out"); }
// 3. function format(val: string | number): string { return val.toString(); }
