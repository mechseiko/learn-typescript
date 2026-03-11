/**
 * LESSON 16
 * Modules in TypeScript
 * 
 * Goal:
 * Learn how to organize code using exports and imports.
 * 
 * How to run:
 * npm run lesson:16
 */

/**
 * TypeScript uses the same ES Module syntax as modern JavaScript (import/export).
 * You can export variables, functions, classes, and even interfaces/types.
 */

/**
 * BASIC EXAMPLE (Simulated)
 */
// In one file: export const pi = 3.14;
// In another: import { pi } from "./math";

export interface SharedUser {
    id: string;
    name: string;
}

export function greet(user: SharedUser) {
    console.log(`Hello, ${user.name}`);
}

/**
 * FRONTEND EXAMPLE
 */
// Default exports are also supported
const config = { api: "https://api.example.com" };
export default config;

/**
 * COMMON MISTAKES
 */
// Forget to include '.ts' or '.js' in some environments, 
// or trying to import a file that isn't exported.

/**
 * PRACTICE CHALLENGES
 */

// 1. Create an interface 'Task' and export it.


// 2. Create a function that adds numbers and export it.


// 3. Try importing a type from another (simulated) file using 'import type'.


console.log("Lesson 16 Complete! 🚀");
