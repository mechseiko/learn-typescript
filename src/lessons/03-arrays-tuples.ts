export {};
/**
 * LESSON 03
 * Arrays and Tuples
 * 
 * Goal:
 * Learn how to type arrays and fixed-length tuples.
 * 
 * How to run:
 * npm run lesson:03
 */

console.log('lesson 03-arrays-tuples');

/**
 * Arrays can be restricted to specific types. 
 * Tuples are arrays with a fixed number of elements and specific types at each position.
 */

/**
 * BASIC EXAMPLE
 */
let list: number[] = [1, 2, 3];
let genericList: Array<string> = ["a", "b", "c"];

// Tuples
let person: [string, number] = ["Alice", 25];

/**
 * FRONTEND EXAMPLE
 * Arrays are crucial for rendering lists of UI elements (e.g., in React: `users.map(...)`).
 * Tuples are often used in hooks, like React's `useState`, which returns exactly `[state, setState]`.
 */
type Product = { id: string; title: string; price: number };

// 1. Array of Objects for a Shopping Cart UI
const cartItems: Product[] = [
    { id: "p1", title: "Mechanical Keyboard", price: 150 },
    { id: "p2", title: "Ergonomic Mouse", price: 80 }
];

function renderCart(items: Product[]) {
    items.forEach(item => console.log(`- ${item.title}: $${item.price}`));
}
renderCart(cartItems);

// 2. Tuple representing a simple [state, setter] pattern (like useState)
type StateSetter<T> = (newValue: T) => void;
let hookState: [boolean, StateSetter<boolean>] = [
    false, 
    (val) => { console.log(`State updated to ${val}`) }
];

const [isModalOpen, setIsModalOpen] = hookState;
setIsModalOpen(true);

// Readonly arrays prevent mutations - useful for Redux state or config data
const activeThemes: readonly string[] = ["light", "dark"];
// activeThemes.push("system"); // ❌ Error

/**
 * COMMON MISTAKES
 */
let items: string[] = ["apple", "banana"];
// items.push(42); // ❌ Error: number is not assignable to string

/**
 * PRACTICE CHALLENGES
 */

// 1. Create an array of numbers called 'scores'.


// 2. Create a tuple for a product: [productName, price].


// 3. Create an array of strings and try to push a number into it.


/**
 * --- SOLUTIONS ---
 */
// 1. let scores: number[] = [90, 85, 100];
// 2. let product: [string, number] = ["Keyboard", 150];
// 3. let strings: string[] = ["a"]; 
//    strings.push(1); // ❌ Error
