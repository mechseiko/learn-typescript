export {};
/**
 * Lesson 01: Basic Types
 * 
 * In this lesson you will learn about the fundamental building blocks of TypeScript:
 * - string
 * - number
 * - boolean
 * - arrays
 * - tuples
 * - any (and why to avoid it)
 * - unknown (and why it's safer than any)
 * - basic type annotations
 * - type inference
 *
 * How to run this lesson:
 * npm run lesson:01
 */

// --- 1. Basic Type Annotations & Type Inference ---
// In JavaScript, you just say 'let name = "Alice"'.
// In TypeScript, you can be explicit:
let userName: string = "Abdul";
let userAge = 25;
let isDeveloper: boolean = true;

// Type Inference: TypeScript is smart enough to guess the type if you assign a value immediately.
// We don't always need to write the explicit type.
let inferredName = "Seiko"; // TS infers this is a string
// inferredName = 100; // Error! Type 'number' is not assignable to type 'string'.

console.log(`User: ${userName}, Age: ${userAge}, Developer: ${isDeveloper}`);

// --- 2. Arrays & Tuples ---
// You can define what types an array should contain.
let skills: string[] = ["HTML", "CSS", "JavaScript"];
let scores: number[] = [95, 88, 100];

// Tuples are arrays with a fixed number of elements whose types are known.
let userTuple: [string, number, boolean] = ["Abdul", 25, true];

// Let's try pushing a number into the skills array:
// skills.push(10); // Uncomment this line to see the error!

console.log(`Skills: ${skills.join(", ")}`);
console.log(`Tuple Data: Name: ${userTuple[0]}, Age: ${userTuple[1]}`);

// --- 3. The 'any' vs 'unknown' Type ---
// 'any' tells TypeScript to opt-out of type checking. It's like writing plain JS.
// USE IT SPARINGLY! 
let dynamicValue: any = "I can be anything";
dynamicValue = 42;
dynamicValue = { name: "I'm still happy" };
// dynamicValue.fakeMethod(); // No error at compile time, but will crash at runtime!

// 'unknown' is the type-safe counterpart of 'any'. You can assign anything to it,
// but you have to check its type before using it (Type Guarding/Narrowing).
let safeDynamicValue: unknown = "I might be a string";
// console.log(safeDynamicValue.toUpperCase()); // Error! Object is of type 'unknown'.

if (typeof safeDynamicValue === "string") {
  console.log(safeDynamicValue.toUpperCase()); // Now TS knows it's a string!
}

// --- 4. Try It Yourself ---
// 1. Create a variable called 'projectName' and assign it a string.
// 2. Create a variable called 'lessonCount' and assign it a number.
// 3. Try assigning 'lessonCount' to 'projectName' and see what happens.

// WRITE YOUR CODE HERE:


// --- 5. Mini Challenge ---
/**
 * Create a small "User Profile" system using basic types.
 * Define variables for:
 * - fullName (string)
 * - accountBalance (number)
 * - isActive (boolean)
 * - recentTags (array of strings)
 * 
 * Print them to the console.
 */

// YOUR CHALLENGE SOLUTION:

