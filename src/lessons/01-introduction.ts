export {};
/**
 * 
 * LESSON 01
 * Introduction to TypeScript
 * 
 * Goal: 
 * Understand what TypeScript is, why it exists, and get your first code running.
 * 
 * How to run:
 * npm run lesson:01
 */

/**
 * TypeScript is a superset of JavaScript that adds "types". 
 * It helps catch errors during development before you even run your code.
 * Think of it as JavaScript with a powerful safety net.
 */

/**
 * BASIC EXAMPLE
 */
let message = "Hello, TypeScript!";
console.log(message);

// In TS, we can also be explicit:
let greeting: string = "Welcome to the course";

/**
 * FRONTEND EXAMPLE
 */
const pageTitle: string = "TypeScript Learning Lab";
const lessonCount: number = 20;

console.log(`Welcome to ${pageTitle}. There are ${lessonCount} lessons to complete.`);

/**
 * COMMON MISTAKES
 */
let age: number = 25;
// age = "twenty-five"; // ❌ Error: Type 'string' is not assignable to type 'number'.

/**
 * PRACTICE CHALLENGES
 */

// 1. Create a variable called 'developerName' and assign it your name (string).


// 2. Create a variable called 'isCompleted' and assign it a boolean value.


// 3. Create a variable called 'score' (number) and try assigning a string to see the error.


console.log("Lesson 01 Complete! 🚀");

/**
 * --- SOLUTIONS ---
 */
// 1. let developerName: string = "Abdul";
// 2. let isCompleted: boolean = true;
// 3. let score: number = 100;
// score = "A"; // ❌ Error
