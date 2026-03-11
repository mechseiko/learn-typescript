export {};
/**
 * LESSON 07
 * Type Aliases
 * 
 * Goal:
 * Learn how to create reusable, complex type definitions using aliases.
 */

/**
 * Type aliases allow you to give a name to any type (primitive, object, or union).
 * This makes your code more readable and easier to maintain.
 */

/**
 * BASIC EXAMPLE
 */
type ID = string | number;

let userId: ID = "u123";
let productId: ID = 445;

/**
 * FRONTEND EXAMPLE
 */
type User = {
    id: ID;
    username: string;
    email: string;
    isActive: boolean;
};

const currentUser: User = {
    id: 1,
    username: "abdul_s",
    email: "abdul@example.com",
    isActive: true
};

/**
 * COMMON MISTAKES
 */
type Point = { x: number; y: number };
// let myPoint: Point = { x: 10 }; // ❌ Error: Property 'y' is missing!

/**
 * PRACTICE CHALLENGES
 */

// 1. Create a type alias for a 'Coordinate' that combines latitude and longitude (numbers).


// 2. Create a type alias for a 'Status' that can be "online", "offline", or "busy".


// 3. Create a complex 'Product' type alias with name, price, and an optional description.


console.log("Lesson 07 Complete! 🚀");
