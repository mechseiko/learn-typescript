export {};
/**
 * Lesson 07: Advanced Narrowing & Type Guards
 * 
 * Narrowing is the magic that makes TypeScript understand your logic.
 * In this lesson you will learn:
 * - The 'typeof' and 'instanceof' narrowing (Review)
 * - The 'in' operator (Checking for properties)
 * - Type Predicates ('is' keyword)
 * - Discriminated Unions (The most powerful pattern for complex UI state)
 *
 * How to run this lesson:
 * npm run lesson:07
 */

// --- 1. The 'in' Operator ---
// Use it to check if a property exists on an object.
interface Bird {
  fly: () => void;
}
interface Fish {
  swim: () => void;
}

function move(animal: Bird | Fish) {
  if ("fly" in animal) {
    animal.fly();
  } else {
    animal.swim();
  }
}

// --- 2. Type Predicates (is) ---
// Sometimes you need a custom function to tell TypeScript what a type is.
function isBird(animal: Bird | Fish): animal is Bird {
  return (animal as Bird).fly !== undefined;
}

function makeNoise(animal: Bird | Fish) {
  if (isBird(animal)) {
    console.log("Tweet tweet!");
  } else {
    console.log("Glub glub!");
  }
}

// --- 3. Discriminated Unions ---
// A super common and clean pattern. Give each type a 'kind' or 'type' property.
interface SuccessState {
  status: "success";
  data: string;
}
interface ErrorState {
  status: "error";
  message: string;
}
interface LoadingState {
  status: "loading";
}

type UIState = SuccessState | ErrorState | LoadingState;

function renderUI(state: UIState) {
  switch (state.status) {
    case "loading":
      console.log("Loading spinner...");
      break;
    case "success":
      console.log("Data:", state.data);
      break;
    case "error":
      console.log("Error:", state.message);
      break;
  }
}

// --- 4. Try It Yourself ---
/**
 * 1. Define two types: 'Circle' (radius: number) and 'Square' (sideLength: number).
 * 2. Add a 'kind: "circle"' and 'kind: "square"' to each.
 * 3. Create a function 'getArea' that uses a switch statement to calculate area.
 */

// WRITE YOUR CODE HERE:


// --- 5. Mini Challenge ---
/**
 * API Guard Challenge:
 * Create a type guard function 'isValidResponse' that checks if an object 
 * has a property 'authToken' which is a string.
 */

// YOUR CHALLENGE SOLUTION:

