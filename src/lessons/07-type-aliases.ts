export {};
/**
 * LESSON 07
 * Type Aliases
 * 
 * Goal:
 * Learn how to create reusable, complex type definitions using aliases.
 * 
 * How to run:
 * npm run lesson:07
 */

console.log('lesson 07-type-aliases');

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
 * Type Aliases are the backbone of typing React props, Redux state slices,
 * or API response payloads. They are often preferred over interfaces for unions.
 */
type AppTheme = "light" | "dark" | "system";

type ButtonProps = {
    label: string;
    theme: AppTheme;
    isDisabled?: boolean;
    onClick: () => void;
};

// A discriminative union for a complex state like Data Fetching
type FetchState = 
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success", data: any[] }
  | { status: "error", errorMsg: string };

function renderUI(state: FetchState) {
    switch(state.status) {
        case "loading": return "Spinner...";
        case "success": return `List of ${state.data.length} items`;
        case "error":   return `Error: ${state.errorMsg}`;
        default:        return "Ready";
    }
}
console.log(renderUI({ status: "success", data: [1,2,3] }));

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


/**
 * --- SOLUTIONS ---
 */
// 1. type Coordinate = { lat: number; lng: number };
// 2. type Status = "online" | "offline" | "busy";
// 3. type Product = { name: string; price: number; description?: string };
