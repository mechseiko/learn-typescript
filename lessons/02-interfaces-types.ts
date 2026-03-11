export {};
/**
 * Lesson 02: Interfaces and Type Aliases
 * 
 * In this lesson you will learn how to define the "shape" of objects:
 * - interface
 * - type aliases
 * - optional properties (?)
 * - readonly properties
 *
 * This is crucial for frontend devs dealing with API responses or component props.
 * 
 * How to run this lesson:
 * npm run lesson:02
 */

// --- 1. Basic Interface ---
// An interface describes what an object MUST look like.
interface User {
  id: number;
  username: string;
  email: string;
}

const activeUser: User = {
  id: 1,
  username: "mechseiko",
  email: "hello@example.com"
};

console.log(`Welcome back, ${activeUser.username}!`);

// --- 2. Optional and Readonly Properties ---
interface Product {
  readonly id: number; // Cannot be changed after creation
  name: string;
  price: number;
  description?: string; // The '?' means it's optional
}

const laptop: Product = {
  id: 101,
  name: "MacBook Pro",
  price: 1999
};

// laptop.id = 102; // Error! 'id' is readonly.

console.log(`Product: ${laptop.name}, Price: $${laptop.price}`);

// --- 3. Type Aliases ---
// Similar to interfaces, but more flexible (useful for unions, which we'll see later).
type Point = {
  x: number;
  y: number;
};

const coordinate: Point = { x: 10, y: 20 };

// --- 4. Try It Yourself ---
// 1. Create an interface 'Post' with properties: id (number), title (string), and content (string).
// 2. Make the 'content' property optional.
// 3. Create a variable 'myPost' that follows this interface.

// WRITE YOUR CODE HERE:


// --- 5. Mini Challenge ---
/**
 * Real-world Scenario: API Response
 * Define an interface 'Comment' for a blog post.
 * It should have:
 * - author (string)
 * - body (string)
 * - likes (number)
 * - isSpam (boolean - optional)
 * 
 * Create an array of 'Comment' objects and map over them to print the author.
 */

// YOUR CHALLENGE SOLUTION:

