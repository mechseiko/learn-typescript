export {};
/**
 * Lesson 04: Unions, Intersections, and Enums
 * 
 * In this lesson you will learn:
 * - Union Types (|) - When a value can be multiple types
 * - Intersection Types (&) - Mixing multiple types
 * - Enums - Giving names to a set of numeric or string values
 * - Literal Types - Exact values as types
 *
 * These features are great for UI states (loading, error, success).
 * 
 * How to run this lesson:
 * npm run lesson:04
 */

// --- 1. Union Types ---
// Useful when a variable can be one of several types.
let identification: string | number;
identification = "ABC-123";
identification = 456;

// identification = false; // Error! Boolean is not allowed.

// --- 2. Literal Types ---
// You can restrict a variable to SPECIFIC values.
type ButtonSize = "small" | "medium" | "large";
let myButton: ButtonSize = "medium";

// myButton = "extra-large"; // Error! Not a valid ButtonSize.

// --- 3. Intersection Types ---
// Combine multiple types into one.
interface Draggable {
  drag: () => void;
}

interface Resizable {
  resize: () => void;
}

type UIWidget = Draggable & Resizable;

const box: UIWidget = {
  drag: () => console.log("Dragging..."),
  resize: () => console.log("Resizing...")
};

// --- 4. Enums ---
// Enums allow us to define a set of named constants.
enum LoadingState {
  Idle,
  Loading,
  Success,
  Error
}

let currentState: LoadingState = LoadingState.Idle;

if (currentState === LoadingState.Idle) {
  console.log("Waiting for user to click...");
}

// --- 5. Try It Yourself ---
// 1. Create a union type 'Status' that can be "online", "offline", or "away".
// 2. Create an enum 'UserRole' with ADMIN, EDITOR, and VIEWER.

// WRITE YOUR CODE HERE:


// --- 6. Mini Challenge ---
/**
 * UI State Challenge:
 * Define a type 'ServerResponse' that is a Union of:
 * - { status: "success", data: string[] }
 * - { status: "error", message: string }
 * 
 * Create a function 'handleResponse' that takes this type and logs:
 * - The count of data if success.
 * - The error message if error.
 * 
 * Hint: Use an 'if (response.status === "success")' block. This is called "Type Narrowing".
 */

// YOUR CHALLENGE SOLUTION:

