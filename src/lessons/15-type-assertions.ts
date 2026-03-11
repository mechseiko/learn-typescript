export {};
/**
 * LESSON 15
 * Type Assertions
 * 
 * Goal:
 * Learn how to tell TypeScript you know more about a type than it does using 'as'.
 * 
 * How to run:
 * npm run lesson:15
 */

/**
 * Sometimes you know the type of a value better than TypeScript can infer.
 * In these cases, you can use 'Assertions'.
 */

/**
 * BASIC EXAMPLE
 */
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;

/**
 * FRONTEND EXAMPLE
 */
// Very common with DOM elements
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
// myCanvas.getContext("2d"); // TypeScript now knows this is a canvas!

/**
 * COMMON MISTAKES
 */
let x = "hello";
// let y = x as number; // ❌ Error: Neither type sufficiently overlaps. 

// The "Double Assertion" (Dangerous!) - Avoid unless necessary:
let z = (x as unknown) as number; 

/**
 * PRACTICE CHALLENGES
 */

// 1. Assert an 'unknown' variable to be a 'number'.


// 2. Assert a generic 'Element' from getElementById to be an 'HTMLInputElement'.


// 3. Use the non-null assertion operator (!) on a variable that could be null.


console.log("Lesson 15 Complete! 🚀");
