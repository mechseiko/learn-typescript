export {};
/**
 * Lesson 08: Classes & Access Modifiers
 * 
 * TypeScript brings strong typing to JavaScript's Class system.
 * In this lesson you will learn:
 * - Public, Private, and Protected modifiers
 * - Readonly properties in classes
 * - Shorthand initialization (Personal favorite!)
 * - How classes implement interfaces
 *
 * How to run this lesson:
 * npm run lesson:08
 */

// --- 1. Basic Class and Modifiers ---
class Account {
  public name: string; // Accessible from anywhere (default)
  private id: number;  // Only accessible inside this class
  protected balance: number; // Accessible inside this class and descendants

  constructor(name: string, id: number, balance: number) {
    this.name = name;
    this.id = id;
    this.balance = balance;
  }

  deposit(amount: number) {
    this.balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.balance}`);
  }
}

const myAccount = new Account("Abdul", 1, 100);
// myAccount.id = 2; // Error! 'id' is private.

// --- 2. Shorthand Initialization ---
// You can define and initialize properties directly in the constructor!
class UserProfile {
  constructor(
    public readonly username: string,
    private email: string,
    protected age: number
  ) {}

  getEmail() {
    return this.email;
  }
}

const profile = new UserProfile("mechseiko", "hello@example.com", 25);
console.log(`User: ${profile.username}`);

// --- 3. Classes and Interfaces ---
// A class can be forced to follow an interface.
interface Printable {
  print(): void;
}

class Invoice implements Printable {
  constructor(public amount: number) {}

  print() {
    console.log(`Invoice Amount: $${this.amount}`);
  }
}

// --- 4. Try It Yourself ---
/**
 * 1. Create a class 'Vehicle' with a public 'make' and a private 'speed'.
 * 2. Use shorthand initialization.
 * 3. Create a method 'accelerate' that increases speed.
 */

// WRITE YOUR CODE HERE:


// --- 5. Mini Challenge ---
/**
 * Logger Challenge:
 * Create an interface 'ILogger' with a method 'log(msg: string): void'.
 * Create a class 'ConsoleLogger' that implements 'ILogger'.
 * Add a private property 'prefix' that is added to every log.
 */

// YOUR CHALLENGE SOLUTION:

