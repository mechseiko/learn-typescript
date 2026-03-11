export {};
/**
 * LESSON 18
 * Advanced Types
 * 
 * Goal:
 * Master 'keyof', 'typeof', indexed access types, and mapped types.
 * 
 * How to run:
 * npm run lesson:18
 */

/**
 * Advanced types allow you to create dynamic and complex type relationships 
 * based on existing values or types.
 */

/**
 * BASIC EXAMPLE
 */
type Point = { x: number; y: number };
type PointKeys = keyof Point; // "x" | "y"

const data = { id: 1, name: "Test" };
type DataType = typeof data; // { id: number; name: string }

/**
 * FRONTEND EXAMPLE
 */
interface AppConfig {
    theme: "light" | "dark";
    version: number;
}

// Indexed Access Type
type ThemeType = AppConfig["theme"]; // "light" | "dark"

// Mapped Type
type ReadonlyConfig<T> = {
    readonly [P in keyof T]: T[P];
};

type MyReadonlyConfig = ReadonlyConfig<AppConfig>;

/**
 * COMMON MISTAKES
 */
const colors = { red: "#ff0000", blue: "#0000ff" };
// type Color = keyof colors; // ❌ Error: 'colors' refers to a value. 
// Use 'keyof typeof colors' instead.

/**
 * PRACTICE CHALLENGES
 */

// 1. Use 'keyof' to create a union of all keys in a 'User' interface.


// 2. Use 'typeof' to capture the type of an existing object literal.


// 3. Create a mapped type that makes all properties in an interface optional (Partial implementation).


console.log("Lesson 18 Complete! 🚀");
