export {};
/**
 * LESSON 12
 * Generics
 * 
 * Goal:
 * Learn how to create reusable, flexible components using Generics.
 */

/**
 * Generics allow you to create components that work over a variety of types
 * rather than a single one. This allows for type-safe reusability.
 */

/**
 * BASIC EXAMPLE
 */
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);

/**
 * FRONTEND EXAMPLE
 */
interface ApiResponse<T> {
    data: T;
    error: string | null;
}

interface User { name: string }

const userResponse: ApiResponse<User> = {
    data: { name: "Abdul" },
    error: null
};

/**
 * COMMON MISTAKES
 */
function getLength<T>(arg: T) {
    // return arg.length; // ❌ Error: Property 'length' does not exist on type 'T'.
}

// Fixed with constraints:
function getLengthSafe<T extends { length: number }>(arg: T) {
    return arg.length;
}

/**
 * PRACTICE CHALLENGES
 */

// 1. Create a generic function 'wrapInArray<T>' that takes value T and returns [T].


// 2. Create a generic interface 'Box<T>' with a 'content' property of type T.


// 3. Create a generic function that takes an array of T and returns the first element.


console.log("Lesson 12 Complete! 🚀");
