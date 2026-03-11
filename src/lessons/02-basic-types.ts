export {};
/**
 * LESSON 02
 * Basic Types
 * 
 * Goal:
 * Master the primitive types: string, number, boolean, null, undefined, any, and unknown.
 */

/**
 * TypeScript has all the primitive types you know from JavaScript, 
 * plus a few special ones like 'any' and 'unknown'.
 */

/**
 * BASIC EXAMPLE
 */
let myName: string = "Abdul";
let myAge: number = 30;
let isStudent: boolean = false;
let empty: null = null;
let notSet: undefined = undefined;

/**
 * FRONTEND EXAMPLE
 */
// Using 'unknown' is safer than 'any' because it forces a type check.
let apiData: unknown = "Some data from a server";

if (typeof apiData === "string") {
    console.log(apiData.toUpperCase());
}

/**
 * COMMON MISTAKES
 */
let userId: any = 123;
userId = "abc"; // ✅ 'any' allows everything (avoid this!)

let safeId: unknown = 456;
// safeId.toFixed(); // ❌ Error: Object is of type 'unknown'.

/**
 * PRACTICE CHALLENGES
 */

// 1. Create a variable that can hold ANY value (use any).


// 2. Create a variable using 'unknown' and then use a type check (typeof) to use it as a number.


// 3. Create variables for null and undefined explicitly.


console.log("Lesson 02 Complete! 🚀");
