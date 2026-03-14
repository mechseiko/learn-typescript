export {};
/**
 * LESSON 02
 * Basic Types
 * 
 * Goal:
 * Master the primitive types: string, number, boolean, null, undefined, any, and unknown.
 * 
 * How to run:
 * npm run lesson:02
 */

console.log('lesson 02-basic-types');

/**
 * TypeScript has all the primitive types you know from JavaScript, 
 * plus a few special ones like 'any' and 'unknown'.
 */

/**
 * BASIC EXAMPLE
 */
let myName: string = "mechseiko";
let myAge: number = 30;
let isStudent: boolean = false;
let empty: null = null;
let notSet: undefined = undefined;

/**
 * FRONTEND EXAMPLE
 * Handling API responses often requires dealing with 'unknown' or 'any' types initially.
 * Here we demonstrate how to safely narrow types before using them in a UI component,
 * such as rendering a user's display name or handling an error message from a fetch request.
 */
let apiResponseData: unknown = { username: "mechseiko", isActive: true };

// In a real app, you might use a type guard or validation library (like Zod) here.
if (
  typeof apiResponseData === "object" &&
  apiResponseData !== null &&
  "username" in apiResponseData
) {
  // Now TypeScript knows that apiResponseData is an object with a username property
  console.log(`Rendering UI for user: ${(apiResponseData as {username: string}).username}`);
} else if (typeof apiResponseData === "string") {
  // E.g., handling a raw error string from an API
  console.error('API Error:', apiResponseData.toUpperCase());
}

/**
 * COMMON MISTAKES
 */
let userId: any = 123;
userId = "abc"; // ✅ 'any' allows everything (avoid this!)

let safeId: unknown = 456;
// safeId.toFixed(); // ❌ Error: safeId is of type 'unknown'.

/**
 * PRACTICE CHALLENGES
 */

// 1. Create a variable that can hold ANY value (use any).


// 2. Create a variable using 'unknown' and then use a type check (typeof) to use it as a number.


// 3. Create variables for null and undefined explicitly.


/**
 * --- SOLUTIONS ---
 */
// 1. let anyValue: any = "Whatever";
// 2. let unknownValue: unknown = 42;
//    if (typeof unknownValue === "number") { console.log(unknownValue.toFixed()); }
// 3. let myNull: null = null; let myUndefined: undefined = undefined;
