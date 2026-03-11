export {};
/**
 * LESSON 08
 * Union and Intersection Types
 * 
 * Goal:
 * Learn how to combine multiple types using | (Union) and & (Intersection).
 * 
 * How to run:
 * npm run lesson:08
 */

/**
 * Unions (|) allow a value to be one of several types.
 * Intersections (&) combine multiple types into one.
 */

/**
 * BASIC EXAMPLE
 */
let result: string | number;
result = "Success";
result = 200;

type Person = { name: string };
type Employee = { id: number };

type Worker = Person & Employee;

const newWorker: Worker = {
    name: "Abdul",
    id: 101
};

/**
 * FRONTEND EXAMPLE
 */
type LoadingState = { state: "loading" };
type SuccessState = { state: "success"; data: string[] };
type ErrorState = { state: "error"; message: string };

type NetworkState = LoadingState | SuccessState | ErrorState;

function handleState(status: NetworkState) {
    if (status.state === "success") {
        console.log("Data:", status.data);
    }
}

/**
 * COMMON MISTAKES
 */
type A = { x: number };
type B = { y: number };
type C = A & B;

// const invalid: C = { x: 1 }; // ❌ Error: Property 'y' is missing!

/**
 * PRACTICE CHALLENGES
 */

// 1. Create a union type called 'StringOrBoolean'.


// 2. Create an intersection type 'AdminUser' that combines 'User' (name) and 'Permissions' (canEdit: boolean).


// 3. Create a variable that can be either a string or an array of strings.


console.log("Lesson 08 Complete! 🚀");

/**
 * --- SOLUTIONS ---
 */
// 1. type StringOrBoolean = string | boolean;
// 2. type AdminUser = { name: string } & { canEdit: boolean };
// 3. let val: string | string[];
