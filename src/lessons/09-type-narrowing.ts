export {};
/**
 * LESSON 09
 * Type Narrowing
 * 
 * Goal:
 * Learn how to use guards like typeof, in, and instanceof to refine types.
 * 
 * How to run:
 * npm run lesson:09
 */

console.log('lesson 09-type-narrowing');

/**
 * Narrowing is the process of moving from a broad type to a more specific type
 * using conditional checks (Type Guards).
 */

/**
 * BASIC EXAMPLE
 */
function process(input: string | number) {
    if (typeof input === "string") {
        // Here, input is definitely a string
        console.log(input.toLowerCase());
    } else {
        // Here, input is definitely a number
        console.log(input.toFixed(2));
    }
}

/**
 * FRONTEND EXAMPLE
 * In React/Vue, you often narrow types to decide which component to render
 * or how to parse an incoming API payload.
 */
type ApiError = { type: "ApiError"; statusCode: number; message: string };
type NetworkError = { type: "NetworkError"; isOffline: true };

type FetchError = ApiError | NetworkError;

function displayErrorNotification(error: FetchError) {
    // Narrowing using a literal discriminator ("type")
    if (error.type === "ApiError") {
        console.error(`Server rejected request (Code: ${error.statusCode}): ${error.message}`);
    } else {
        console.warn("You appear to be offline. Please check your connection.");
    }
}

displayErrorNotification({ type: "NetworkError", isOffline: true });

/**
 * COMMON MISTAKES
 */
function printLen(val: string | null) {
    // console.log(val.length); // ❌ Error: 'val' is possibly 'null'.
    if (val) {
        console.log(val.length); // ✅ Fixed with truthiness narrowing
    }
}

/**
 * PRACTICE CHALLENGES
 */

// 1. Write a function that uses 'typeof' to handle string or boolean inputs.


// 2. Use the 'in' operator to check if an object has a 'price' property.


// 3. Create a class 'Admin' and 'User', then use 'instanceof' to check a variable.


/**
 * --- SOLUTIONS ---
 */
// 1. function check(v: string | boolean) { if (typeof v === "string") ... }
// 2. if ("price" in obj) { ... }
// 3. if (val instanceof Admin) { ... }
