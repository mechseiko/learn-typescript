export {};
/**
 * LESSON 19
 * Working with Third-Party Libraries
 * 
 * Goal:
 * Learn how to handle type definitions for external libraries using @types.
 * 
 * How to run:
 * npm run lesson:19
 */

console.log('lesson 19-libraries');

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
 * In a React/Next.js app, you'll frequently use types provided by the framework
 * to properly type your components or API routes.
 */
// (Simulating a React import)
// @ts-ignore
import type { ReactNode, MouseEvent } from 'react';

// Using types from a 3rd party library to type props
interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    // Render logic
}

function onClickHandler(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault(); // TypeScript knows 'e' is a MouseEvent with preventDefault
    console.log("Button clicked!");
}

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




/**
 * --- SOLUTIONS ---
 */
// 1. npm install --save-dev @types/react
// 2. npm install --save-dev @types/express
// 3. Create a .d.ts file and declare the module.
