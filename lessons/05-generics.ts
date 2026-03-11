export {};
/**
 * Lesson 05: Generics
 * 
 * In this lesson you will learn:
 * - What are Generics? (Types that act like variables)
 * - Generic Functions
 * - Generic Interfaces
 * - Constraints (T extends something)
 *
 * Generics allow you to create components that work with a variety of types
 * rather than a single one.
 * 
 * How to run this lesson:
 * npm run lesson:05
 */

// --- 1. Why Generics? ---
// Without generics, we'd have to use 'any' or duplicate code for different types.
// A Generic is like a placeholder (usually 'T') that we fill in later.

function wrapInArray<T>(value: T): T[] {
  return [value];
}

const stringArray = wrapInArray<string>("Hello"); // T is now string
const numberArray = wrapInArray<number>(42);      // T is now number

console.log(stringArray, numberArray);

// --- 2. Generic Interfaces ---
// Useful for API wrappers or data structures.
interface ApiResponse<Data> {
  status: number;
  data: Data;
  error?: string;
}

interface User {
  id: number;
  name: string;
}

const userResponse: ApiResponse<User> = {
  status: 200,
  data: { id: 1, name: "Abdul" }
};

// --- 3. Constraints ---
// Sometimes we want to limit what 'T' can be.
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(item: T): void {
  console.log(`Length is: ${item.length}`);
}

logLength("Hello TypeScript"); // Strings have length
logLength([1, 2, 3]);          // Arrays have length
// logLength(10);              // Error! Numbers don't have length.

// --- 4. Try It Yourself ---
// 1. Create a generic function 'getFirstElement' that takes an array of T and returns T.
// 2. Test it with an array of numbers and an array of strings.

// WRITE YOUR CODE HERE:


// --- 5. Mini Challenge ---
/**
 * Generic Storage Challenge:
 * Create a class 'StorageContainer<T>' with:
 * - an internal private array 'items' of type T.
 * - a method 'addItem(item: T)' to add to the array.
 * - a method 'getAllItems()' that returns the array.
 * 
 * Create an instance for storing 'string' items and another for 'number' items.
 */

// YOUR CHALLENGE SOLUTION:

