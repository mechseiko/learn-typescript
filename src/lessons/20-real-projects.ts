export {};
/**
 * LESSON 20
 * TypeScript in Real Frontend Projects
 * 
 * Goal:
 * Learn how to structure and apply all TypeScript concepts in a real project.
 * 
 * How to run:
 * npm run lesson:20
 */

console.log('lesson 20-real-projects');

/**
 * Real projects involve complex interfaces, global state, and strict configurations.
 * This final lesson brings together everything we've learned.
 */

/**
 * BASIC EXAMPLE
 */
// Organizing common types in a 'types' folder
// src/types/user.ts
// src/types/api.ts

/**
 * FRONTEND EXAMPLE: A full feature implementation (React Context / Custom Hook Style)
 * Combining Interfaces, Context, and State Management.
 */
interface UserSession {
    token: string;
    userId: string;
    permissions: "read" | "write" | "admin";
}

// 1. Discriminated Union for State
type AuthState = 
    | { status: "unauthenticated" }
    | { status: "loading" }
    | { status: "authenticated"; session: UserSession }
    | { status: "error"; errorMessage: string };

// 2. Action Types for a Reducer
type AuthAction = 
    | { type: "LOGIN_START" }
    | { type: "LOGIN_SUCCESS"; payload: UserSession }
    | { type: "LOGIN_FAILURE"; error: string }
    | { type: "LOGOUT" };

// 3. Reducer Function (Pure logic)
function authReducer(state: AuthState, action: AuthAction): AuthState {
    switch (action.type) {
        case "LOGIN_START":
            return { status: "loading" };
        case "LOGIN_SUCCESS":
            return { status: "authenticated", session: action.payload };
        case "LOGIN_FAILURE":
            return { status: "error", errorMessage: action.error };
        case "LOGOUT":
            return { status: "unauthenticated" };
        default:
            return state;
    }
}

// Example usage
let currentState: AuthState = { status: "unauthenticated" };
currentState = authReducer(currentState, { type: "LOGIN_START" });
console.log("Current state:", currentState.status);

/**
 * COMMON MISTAKES
 */
// Using 'any' as a shortcut when things get complex. 
// PRO TIP: Stay strict! The time you save now using 'any' will be lost later in debugging.

/**
 * PRACTICE CHALLENGES
 */

// 1. Refactor the ShoppingCart to use a generic 'Storage' interface.


// 2. Create a union of all possible Events for a simple UI (click, submit, change).


// 3. Final Boss Challenge: Design a simple Redux-like state management system with types.




/**
 * --- SOLUTIONS ---
 */
// 1. interface Storage<T> { ... }
// 2. type UIEvent = "click" | "submit" | "change";
// 3. type Action = { type: string; payload: any }; type State = { ... };
