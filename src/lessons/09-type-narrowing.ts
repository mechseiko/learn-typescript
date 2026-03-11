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
 */
interface Bird { fly: () => void }
interface Fish { swim: () => void }

function move(animal: Bird | Fish) {
    if ("fly" in animal) {
        animal.fly();
    } else {
        animal.swim();
    }
}

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


console.log("Lesson 09 Complete! 🚀");
