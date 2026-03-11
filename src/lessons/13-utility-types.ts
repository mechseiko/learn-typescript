export {};
/**
 * LESSON 13
 * Utility Types
 * 
 * Goal:
 * Learn how to transform existing types using Partial, Required, Readonly, Pick, Omit, and Record.
 */

/**
 * Utility types are built-in tools that help you construct new types 
 * from existing ones without rewriting everything.
 */

/**
 * BASIC EXAMPLE
 */
interface User {
    id: number;
    name: string;
    email: string;
}

type UserUpdate = Partial<User>; // All properties become optional
type UserPreview = Pick<User, "id" | "name">; // Only id and name
type UserWithoutEmail = Omit<User, "email">; // Everything except email

/**
 * FRONTEND EXAMPLE
 */
interface BlogPost {
    title: string;
    content: string;
}

// Record is great for maps/dictionaries
const posts: Record<string, BlogPost> = {
    "first-post": { title: "Hello", content: "World" }
};

/**
 * COMMON MISTAKES
 */
type ReadonlyUser = Readonly<User>;
const user: ReadonlyUser = { id: 1, name: "A", email: "a@a.com" };
// user.name = "B"; // ❌ Error: Cannot assign to 'name' because it is a read-only property.

/**
 * PRACTICE CHALLENGES
 */

// 1. Create a 'Partial' version of a 'Product' interface.


// 2. Use 'Pick' to create a 'ContactInfo' type from a 'User' interface (email and phone).


// 3. Create a 'Record' that maps category names (strings) to arrays of product names.


console.log("Lesson 13 Complete! 🚀");
