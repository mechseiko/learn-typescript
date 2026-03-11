export {};
/**
 * LESSON 17
 * Classes in TypeScript
 * 
 * Goal:
 * Learn how to type classes, use access modifiers, and implement interfaces.
 */

/**
 * TypeScript adds type safety and modifiers like 'private' and 'protected' 
 * to standard JavaScript classes.
 */

/**
 * BASIC EXAMPLE
 */
class Greeter {
    greeting: string;
    
    constructor(message: string) {
        this.greeting = message;
    }
    
    greet() {
        return "Hello, " + this.greeting;
    }
}

/**
 * FRONTEND EXAMPLE
 */
interface Printable {
    print(): void;
}

class Logger implements Printable {
    private prefix: string; // Only accessible inside this class

    constructor(prefix: string) {
        this.prefix = prefix;
    }

    public print() { // Accessible from everywhere
        console.log(`${this.prefix}: Outputting log...`);
    }
}

const myLogger = new Logger("SYSTEM");
myLogger.print();

/**
 * COMMON MISTAKES
 */
class Point {
    readonly x: number;
    constructor(x: number) {
        this.x = x;
    }
}
const p = new Point(10);
// p.x = 20; // ❌ Error: Cannot assign to 'x' because it is a read-only property.

/**
 * PRACTICE CHALLENGES
 */

// 1. Create a 'User' class with a private 'password' property.


// 2. Create a 'Shape' class and a 'Circle' class that extends it.


// 3. Implement an interface 'Movable' (with a move() method) in a 'Robot' class.


console.log("Lesson 17 Complete! 🚀");
