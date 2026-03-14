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

console.log('lesson 08-unions-intersections');

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
 * Intersections are great for composing complex component props (e.g., merging standard HTML
 * attributes with custom component behavior).
 * Unions are perfect for handling diverse states or configuration options.
 */

// Intersection Example: Composing Props
type StandardBoxProps = { width: number; height: number };
type InteractiveProps = { onHover: () => void; onClick: () => void };

type ClickableBoxProps = StandardBoxProps & InteractiveProps;

const myBox: ClickableBoxProps = {
    width: 100, height: 100,
    onHover: () => console.log('Hovered'),
    onClick: () => console.log('Clicked')
};

// Union Example: Component Variants
type AlertVariant = "info" | "warning" | "error";

function renderAlert(variant: AlertVariant, message: string) {
    if (variant === "error") {
        console.error(`🚨 ${message}`);
    } else {
        console.log(`ℹ️ [${variant.toUpperCase()}] ${message}`);
    }
}
renderAlert("warning", "Low disk space!");

/**
 * COMMON MISTAKES
 */
type A = { x: number };
type B = { y: number };
type C = A & B

// const invalid: C = { x: 1 }; // ❌ Error: Property 'y' is missing!

/**
 * PRACTICE CHALLENGES
 */

// 1. Create a union type called 'StringOrBoolean'.


// 2. Create an intersection type 'AdminUser' that combines 'User' (name) and 'Permissions' (canEdit: boolean).


// 3. Create a variable that can be either a string or an array of strings.


/**
 * --- SOLUTIONS ---
 */
// 1. type StringOrBoolean = string | boolean;
// 2. type AdminUser = { name: string } & { canEdit: boolean };
// 3. let val: string | string[];
