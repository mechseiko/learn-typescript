export {};
/**
 * LESSON 04
 * Objects and Type Inference
 * 
 * Goal:
 * Learn how to type objects and understand how TypeScript infers types automatically.
 * 
 * How to run:
 * npm run lesson:04
 */

console.log('lesson 04-objects-inference');

/**
 * You can define the shape of objects explicitly. 
 * TypeScript also "infers" types based on the values you assign.
 */

/**
 * BASIC EXAMPLE
 */
let user: { name: string; age: number } = {
    name: "Abdul",
    age: 25
};

// Type Inference
let city = "Lagos"; // TS infers 'string'
// city = 10; // ❌ Error

/**
 * FRONTEND EXAMPLE
 * Objects and interfaces are heavily used to define Props in UI components (like React)
 * or to type the data returned from an API.
 */
interface UserProfileProps {
    readonly userId: string; // Should not be mutated by the component
    displayName: string;
    avatarUrl?: string;      // Optional, might fall back to a default image
    isActive: boolean;
}

const currentUser: UserProfileProps = {
    userId: "usr_9921",
    displayName: "MechSeiko",
    isActive: true
    // avatarUrl is automatically inferred as missing but valid since it's optional
};

function renderUserProfile(user: UserProfileProps) {
    const avatar = user.avatarUrl || "/default-avatar.png";
    console.log(`Rendering ${user.displayName} with avatar ${avatar}. Active: ${user.isActive}`);
}

renderUserProfile(currentUser);

/**
 * COMMON MISTAKES
 */

interface User {
    name: string;
    dob?: string
}
const person: User = {name: 'tunde'};
// person.age = 30; // ❌ Error: Property 'age' does not exist on type '{ name: string; }'

/**
 * PRACTICE CHALLENGES
 */

// 1. Create an object for a 'car' with properties: brand (string) and year (number).


// 2. Create an interface for a 'Book' with an optional 'subtitle' property.


// 3. Define a readonly property 'id' in a 'User' interface.


/**
 * --- SOLUTIONS ---
 */
// 1. let car: { brand: string; year: number } = { brand: "Tesla", year: 2024 };
// 2. interface Book { title: string; subtitle?: string; }
// 3. interface User { readonly id: number; name: string; }
