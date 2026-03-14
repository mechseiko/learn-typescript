export {};
/**
 * LESSON 11
 * Interfaces
 * 
 * Goal:
 * Learn how to use interfaces to define object shapes and how they relate to type aliases.
 * 
 * How to run:
 * npm run lesson:11
 */

console.log('lesson 11-interfaces');

/**
 * Interfaces are another way to define object shapes. 
 * They are specifically designed for objects and support "merging" and "extending".
 */

/**
 * BASIC EXAMPLE
 */
interface User {
    id: number;
    name: string;
}

const me: User = { id: 1, name: "Abdul" };

/**
 * FRONTEND EXAMPLE
 * Interfaces are standard for typing React component props, especially when they form
 * an inheritance hierarchy (e.g., Base UI component props extended by specific components).
 */
interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    onClick: () => void;
}

// Extending an interface to add specific props for an IconButton
interface IconButtonProps extends BaseButtonProps {
    iconName: string;
    iconSize?: number;
}

const playButton: IconButtonProps = {
    iconName: "play-circle",
    iconSize: 24,
    onClick: () => console.log("Playing video...")
};

// You can also "implement" interfaces in UI stores or API service classes
interface DataStore {
    fetchData(): Promise<any>;
}
class UserStore implements DataStore {
    async fetchData() { return [{ id: 1, name: "Alice" }]; }
}

/**
 * COMMON MISTAKES
 */
// interface ID = number; // ❌ Error: Interfaces can only describe object shapes. 
// Use 'type' for primitives or unions.

/**
 * PRACTICE CHALLENGES
 */

// 1. Create an interface 'Product' with id, name, and price.


// 2. Create an interface 'Electronic' that extends 'Product' and adds a 'voltage' property.


// 3. Create an interface 'Dimensions' for an object with width and height.



/**
 * --- SOLUTIONS ---
 */
// 1. interface Product { id: number; name: string; price: number; }
// 2. interface Electronic extends Product { voltage: number; }
// 3. interface Dimensions { width: number; height: number; }
