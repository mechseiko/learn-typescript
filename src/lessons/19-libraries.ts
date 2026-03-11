export {};
/**
 * LESSON 19
 * Working with Third-Party Libraries
 * 
 * Goal:
 * Learn how to handle type definitions for external libraries using @types.
 */

/**
 * When using libraries like React, Lodash, or Express, you often need 
 * to install their type definitions separately via @types/library-name.
 */

/**
 * BASIC EXAMPLE
 */
// In a real project:
// npm install lodash
// npm install --save-dev @types/lodash

// import _ from "lodash";
// _.capitalize("typescript"); // TypeScript understands the types because of @types/lodash

/**
 * FRONTEND EXAMPLE
 */
// Typing a response from a generic library (like axios)
// axios.get<User>("/api/user").then(res => res.data.name);

/**
 * COMMON MISTAKES
 */
// Using a library that has MISSION types. 
// Fix: create a 'declaration.d.ts' file and use 'declare module "library-name"'.

/**
 * PRACTICE CHALLENGES
 */

// 1. Search for how you would install types for the 'react' library.


// 2. What command would you run to install types for 'express'?


// 3. (Thought Experiment) How would you handle a library that doesn't have @types available?


console.log("Lesson 19 Complete! 🚀");
