export {};
/**
 * Lesson 06: Utility Types
 * 
 * TypeScript provides several "utility types" to help with common type transformations.
 * In this lesson you will learn:
 * - Partial<T> - Makes all properties in T optional
 * - Pick<T, K> - Constructs a type by picking a set of properties K from T
 * - Omit<T, K> - Constructs a type by picking all properties from T and then removing K
 * - Record<K, T> - Constructs an object type whose property keys are K and whose values are T
 *
 * How to run this lesson:
 * npm run lesson:06
 */

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// --- 1. Partial<T> ---
// Useful for update functions where you only want to change some fields.
function updateUser(id: number, updates: Partial<User>) {
  console.log(`Updating user ${id} with:`, updates);
}

updateUser(1, { name: "Abdul" }); // This is valid even though email and age are missing.

// --- 2. Pick<T, K> ---
// Use this when you only need a subset of properties (e.g., for a preview list).
type UserPreview = Pick<User, "id" | "name">;

const preview: UserPreview = {
  id: 1,
  name: "Abdul"
};

// --- 3. Omit<T, K> ---
// Use this when you want everything EXCEPT a few properties.
type UserWithoutSensitiveInfo = Omit<User, "email" | "age">;

const publicInfo: UserWithoutSensitiveInfo = {
  id: 1,
  name: "Abdul"
};

// --- 4. Record<K, T> ---
// Useful for mapping keys to values (like a dictionary).
type Role = "admin" | "editor" | "viewer";
const rolePermissions: Record<Role, string[]> = {
  admin: ["create", "read", "update", "delete"],
  editor: ["read", "update"],
  viewer: ["read"]
};

// --- 5. Try It Yourself ---
/**
 * 1. Create an interface 'Product' with id, name, price, and category.
 * 2. Use 'Omit' to create a 'ProductEntry' type that doesn't include 'id'.
 * 3. Use 'Partial' to create a 'ProductUpdate' type.
 */

// WRITE YOUR CODE HERE:


// --- 6. Mini Challenge ---
/**
 * Config Challenge:
 * Create a specialized Type 'ThemeConfig' using Record.
 * The keys should be "primaryColor", "secondaryColor", and "backgroundColor".
 * The values should all be strings.
 * 
 * Then, create a function 'updateTheme' that takes a Partial<ThemeConfig>.
 */

// YOUR CHALLENGE SOLUTION:

