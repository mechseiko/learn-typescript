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

console.log('lesson 16-modules');

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
 * In modern frontend development (React/Next.js), modules are used to separate
 * Components, Hooks, Utils, and Types into their own files.
 */
// Example of a re-usable API utility
export const fetchUserData = async (userId: string) => {
    const res = await fetch(`/api/users/${userId}`);
    return res.json();
};

// Example of exporting a React Component prop type
export interface ButtonProps {
    label: string;
    onClick: () => void;
}

// Default export commonly used for the main Component in a file
const Button = (props: ButtonProps) => {
    console.log("Rendering Button:", props.label);
};
export default Button;

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


/**
 * --- SOLUTIONS ---
 */
// 1. export interface Task { ... }
// 2. export function add(a: number, b: number) { ... }
// 3. import type { User } from "./types";
