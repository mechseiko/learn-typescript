export {};
/**
 * LESSON 03
 * Arrays and Tuples
 * 
 * Goal:
 * Learn how to type arrays and fixed-length tuples.
 */

/**
 * Arrays can be restricted to specific types. 
 * Tuples are arrays with a fixed number of elements and specific types at each position.
 */

/**
 * BASIC EXAMPLE
 */
let list: number[] = [1, 2, 3];
let genericList: Array<string> = ["a", "b", "c"];

// Tuples
let person: [string, number] = ["Alice", 25];

/**
 * FRONTEND EXAMPLE
 */
type User = { id: number; name: string };
const users: User[] = [
    { id: 1, name: "Ada" },
    { id: 2, name: "Tunde" }
];

// Readonly arrays prevent mutations
const colors: readonly string[] = ["red", "green"];
// colors.push("blue"); // ❌ Error

/**
 * COMMON MISTAKES
 */
let items: string[] = ["apple", "banana"];
// items.push(42); // ❌ Error: number is not assignable to string

/**
 * PRACTICE CHALLENGES
 */

// 1. Create an array of numbers called 'scores'.


// 2. Create a tuple for a product: [productName, price].


// 3. Create an array of strings and try to push a number into it.


console.log("Lesson 03 Complete! 🚀");
