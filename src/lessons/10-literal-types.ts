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

console.log('lesson 10-literal-types');

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
 * Literal types perfectly model CSS properties, routing paths, or precise configuration values
 * in frontend frameworks (e.g., Tailwind variants, standard CSS sizes).
 */
type FlexAlign = "flex-start" | "center" | "flex-end" | "space-between";
type Axis = "x" | "y";

interface FlexContainerConfig {
    direction: "row" | "column";
    justify: FlexAlign;
    alignItems: FlexAlign;
}

const mainLayout: FlexContainerConfig = {
    direction: "column",
    justify: "space-between",
    alignItems: "center"
};

function buildLayoutStyle(config: FlexContainerConfig) {
    return `display: flex; flex-direction: ${config.direction}; justify-content: ${config.justify}; align-items: ${config.alignItems};`;
}
console.log(buildLayoutStyle(mainLayout));

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


/**
 * --- SOLUTIONS ---
 */
// 1. type Theme = "light" | "dark" | "system";
// 2. type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";
// 3. function getSize(s: "S" | "M" | "L"): number { return s === "S" ? 1 : 2; }
