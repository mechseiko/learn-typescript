export {};
/**
 * LESSON 14
 * Enums
 * 
 * Goal:
 * Learn how to define a set of named constants using Enums and when to use alternatives.
 */

/**
 * Enums allow us to define a set of named constants. TypeScript supports both
 * numeric and string-based enums.
 */

/**
 * BASIC EXAMPLE
 */
enum Direction {
    Up,
    Down,
    Left,
    Right
}

let move: Direction = Direction.Up; // Value is 0

enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}

/**
 * FRONTEND EXAMPLE
 */
enum UserRole {
    Admin = "ADMIN",
    Editor = "EDITOR",
    Viewer = "VIEWER"
}

function checkAccess(role: UserRole) {
    if (role === UserRole.Admin) {
        console.log("Full Access Granted");
    }
}

/**
 * COMMON MISTAKES
 */
// Many developers prefer "Union of Literals" over Enums for simplicity:
type AlternativeStatus = "active" | "inactive"; 
// Enums generate extra JS code, whereas Literal Unions disappear after compilation.

/**
 * PRACTICE CHALLENGES
 */

// 1. Create an enum 'Response' with 'Yes', 'No', and 'Maybe'.


// 2. Create a string enum 'LogLevel' (Info, Warn, Error).


// 3. Define a fruit enum and try to access its value by name.


console.log("Lesson 14 Complete! 🚀");
