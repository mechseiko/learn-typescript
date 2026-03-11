export {};
/**
 * LESSON 10
 * Literal Types
 * 
 * Goal:
 * Learn how to use specific values as types (Literal Types).
 * 
 * How to run:
 * npm run lesson:10
 */

/**
 * Literal types allow you to specify exactly what value a variable can hold,
 * which is incredibly useful for UI states, directions, or configurations.
 */

/**
 * BASIC EXAMPLE
 */
let direction: "up" | "down" | "left" | "right";
direction = "up";
// direction = "north"; // ❌ Error

/**
 * FRONTEND EXAMPLE
 */
type ButtonVariant = "primary" | "secondary" | "danger" | "ghost";

function getButtonClass(variant: ButtonVariant) {
    return `btn-${variant}`;
}

console.log(getButtonClass("primary"));

/**
 * COMMON MISTAKES
 */
const mode = "dark";
let currentMode: "light" | "dark" = "light";
// currentMode = "Dark"; // ❌ Error: Case sensitivity matters!

/**
 * PRACTICE CHALLENGES
 */

// 1. Create a literal union for 'Theme' (light, dark, system).


// 2. Create a literal type for 'HTTPMethod' (GET, POST, PUT, DELETE).


// 3. Create a function that accepts a 'Size' (S, M, L) and returns a number value.


console.log("Lesson 10 Complete! 🚀");
