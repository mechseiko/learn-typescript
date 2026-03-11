export {};
/**
 * LESSON 11
 * Interfaces
 * 
 * Goal:
 * Learn how to use interfaces to define object shapes and how they relate to type aliases.
 */

/**
 * Interfaces are another way to define object shapes. 
 * They are specifically designed for objects and support "merging" and "extending".
 */

/**
 * BASIC EXAMPLE
 */
interface User {
    id: number;
    name: string;
}

const me: User = { id: 1, name: "Abdul" };

/**
 * FRONTEND EXAMPLE
 */
interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

const myDog: Dog = {
    name: "Rex",
    breed: "Labrador"
};

/**
 * COMMON MISTAKES
 */
// interface ID = number; // ❌ Error: Interfaces can only describe object shapes. 
// Use 'type' for primitives or unions.

/**
 * PRACTICE CHALLENGES
 */

// 1. Create an interface 'Product' with id, name, and price.


// 2. Create an interface 'Electronic' that extends 'Product' and adds a 'voltage' property.


// 3. Create an interface 'Dimensions' for an object with width and height.


console.log("Lesson 11 Complete! 🚀");
