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

console.log('lesson 15-type-assertions');

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
 * Assertions are heavily used when interacting with the DOM (since TS doesn't know your HTML),
 * or when typing a mock object that doesn't strictly satisfy a massive interface in a test.
 */

// 1. DOM interactions
const submitBtn = document.getElementById("submit-btn") as HTMLButtonElement | null;
if (submitBtn) {
    submitBtn.disabled = true; // TS now knows .disabled exists
}

// 2. Type casting an API response when you're 100% sure of the structure
// (Use carefully—a validation library like Zod is safer)
interface ConfigData {
    apiEndpoint: string;
    retryCount: number;
}
const rawJSONStr = '{"apiEndpoint":"https://api.example.com","retryCount":3}';
const appConfig = JSON.parse(rawJSONStr) as ConfigData;

console.log(`Connecting to ${appConfig.apiEndpoint}...`);

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



/**
 * --- SOLUTIONS ---
 */
// 1. let n = unknownVal as number;
// 2. const input = document.getElementById("age") as HTMLInputElement;
// 3. console.log(possiblyNullVar!.length);
