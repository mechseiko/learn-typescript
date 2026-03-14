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

console.log('lesson 18-advanced-types');

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
 * Advanced types are heavily used by library authors (like Redux or React Router)
 * or when building complex generic forms where fields depend on object keys.
 */
interface UserFormState {
    username: string;
    email: string;
    age: number;
}

// 1. keyof: Useful for a generic update function that only accepts valid keys
function updateField<K extends keyof UserFormState>(field: K, value: UserFormState[K]) {
    console.log(`Updating ${field} with value: ${value}`);
}
updateField("username", "MechSeiko");
// updateField("age", "30"); // ❌ Error: "30" is not a number

// 2. typeof: Useful for capturing the shape of a massive configuration object without typing it out
const defaultThemeConfig = {
    colors: { primary: "#000", secondary: "#fff" },
    spacing: { m: 16, l: 24 }
};

type ThemeConfig = typeof defaultThemeConfig;
// Now ThemeConfig is strictly { colors: { primary: string, ... }, spacing: ... }

// 3. Mapped Type: Creating a Validation Errors type based on form state
type FormErrors<T> = {
    [Key in keyof T]?: string; // Every key is optional and maps to an error string
};

const errors: FormErrors<UserFormState> = {
    email: "Invalid email format"
};

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




/**
 * --- SOLUTIONS ---
 */
// 1. type UserKeys = keyof User;
// 2. type MyType = typeof myObj;
// 3. type MyPartial<T> = { [P in keyof T]?: T[P] };
