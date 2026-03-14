export {};
/**
 * LESSON 12
 * Generics
 * 
 * Goal:
 * Learn how to create reusable, flexible components using Generics.
 * 
 * How to run:
 * npm run lesson:12
 */

console.log('lesson 12-generics');

/**
 * Generics allow you to create components that work over a variety of types
 * rather than a single one. This allows for type-safe reusability.
 */

/**
 * BASIC EXAMPLE
 */
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);

/**
 * FRONTEND EXAMPLE
 * Generics power reusable UI components (like a Select dropdown that works with any object type)
 * and type-safe data fetching hooks.
 */

// 1. Generic API Response Wrapper
interface ApiResponse<T> {
    data: T | null;
    status: number;
    error: string | null;
}

interface UserProfile { id: string; name: string }

const fetchUser = async (): Promise<ApiResponse<UserProfile>> => {
    // Simulated fetch
    return { data: { id: "u1", name: "Abdul" }, status: 200, error: null };
};

// 2. Generic React-like Component Props
// A List component that can render an array of anything, provided it has an 'id'
interface ListProps<ItemType extends { id: string | number }> {
    items: ItemType[];
    renderItem: (item: ItemType) => string; // Mocking returning a React node
}

const mockUsers = [{ id: 1, name: "Abdul" }, { id: 2, name: "Tunde" }];

const UserList: ListProps<typeof mockUsers[0]> = {
    items: mockUsers,
    renderItem: (user) => `<li>${user.name}</li>`
};

console.log(UserList.renderItem(UserList.items[0]));

/**
 * COMMON MISTAKES
 */
function getLength<T>(arg: T) {
    // return arg.length; // ❌ Error: Property 'length' does not exist on type 'T'.
}

// Fixed with constraints:
function getLengthSafe<T extends { length: number }>(arg: T) {
    return arg.length;
}

/**
 * PRACTICE CHALLENGES
 */

// 1. Create a generic function 'wrapInArray<T>' that takes value T and returns [T].


// 2. Create a generic interface 'Box<T>' with a 'content' property of type T.


// 3. Create a generic function that takes an array of T and returns the first element.



/**
 * --- SOLUTIONS ---
 */
// 1. function wrapInArray<T>(val: T): T[] { return [val]; }
// 2. interface Box<T> { content: T; }
// 3. function first<T>(arr: T[]): T { return arr[0]; }
