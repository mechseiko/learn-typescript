export {};
/**
 * 
 * LESSON 01
 * Introduction to TypeScript
 * 
 * Goal: 
 * Understand what TypeScript is, why it exists, and get your first code running.
 * 
 * How to run:
 * npm run lesson:01
 */

console.log('lesson 01-introduction');

/**
 * TypeScript is a superset of JavaScript that adds "types". 
 * It helps catch errors during development before you even run your code.
 * Think of it as JavaScript with a powerful safety net.
 */

/**
 * BASIC EXAMPLE
 */
let message: string = "Hello World!";
console.log(message);

// In TS, we can also be explicit:
let greeting: string = "Welcome to the course";

/**
 * FRONTEND EXAMPLE
 * In a real React application, you often use TypeScript to define the shape of your component props
 * or variables to ensure the right data is passed.
 */
const pageTitle: string = "Dashboard - User Profile";
const unreadMessagesCount: number = 5;
const isPremiumUser: boolean = true;

function renderUserGreeting(title: string, messages: number, isPremium: boolean): string {
  const badge = isPremium ? "🌟 PRO" : "Free";
  return `[${badge}] ${title} | You have ${messages} unread messages.`;
}

console.log(renderUserGreeting(pageTitle, unreadMessagesCount, isPremiumUser));

/**
 * COMMON MISTAKES
 */
let age: number = 25;
// age = "twenty-five"; // ❌ Error: Type 'string' is not assignable to type 'number'.

/**
 * PRACTICE CHALLENGES
 */

// 1. Create a variable called 'developerName' and assign it your name (string).


// 2. Create a variable called 'isCompleted' and assign it a boolean value.


// 3. Create a variable called 'score' (number) and try assigning a string to see the error.


/**
 * --- SOLUTIONS ---
 */
// 1. let developerName: string = "Abdul";
// 2. let isCompleted: boolean = true;
// 3. let score: number = 100;
// score = "A"; // ❌ Error
