export {};
/**
 * LESSON 04
 * Objects and Type Inference
 * 
 * Goal:
 * Learn how to type objects and understand how TypeScript infers types automatically.
 * 
 * How to run:
 * npm run lesson:04
 */

/**
 * You can define the shape of objects explicitly. 
 * TypeScript also "infers" types based on the values you assign.
 */

/**
 * BASIC EXAMPLE
 */
let user: { name: string; age: number } = {
    name: "Abdul",
    age: 25
};

// Type Inference
let city = "Lagos"; // TS infers 'string'
// city = 10; // ❌ Error

/**
 * FRONTEND EXAMPLE
 */
interface Config {
    readonly apiKey: string; // Cannot be changed
    timeout?: number;        // Optional property
}

const myConfig: Config = {
    apiKey: "12345-ABCDE"
};

/**
 * COMMON MISTAKES
 */
const person = { name: "John" };
// person.age = 30; // ❌ Error: Property 'age' does not exist on type '{ name: string; }'

/**
 * PRACTICE CHALLENGES
 */

// 1. Create an object for a 'car' with properties: brand (string) and year (number).


// 2. Create an interface for a 'Book' with an optional 'subtitle' property.


// 3. Define a readonly property 'id' in a 'User' interface.


console.log("Lesson 04 Complete! 🚀");

/**
 * --- SOLUTIONS ---
 */
// 1. let car: { brand: string; year: number } = { brand: "Tesla", year: 2024 };
// 2. interface Book { title: string; subtitle?: string; }
// 3. interface User { readonly id: number; name: string; }
