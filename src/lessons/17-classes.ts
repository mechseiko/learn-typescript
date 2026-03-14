export {};
/**
 * LESSON 17
 * Classes in TypeScript
 * 
 * Goal:
 * Learn how to type classes, use access modifiers, and implement interfaces.
 * 
 * How to run:
 * npm run lesson:17
 */

console.log('lesson 17-classes');

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
 * Classes are often used in frontend development for state management (like MobX stores),
 * API service singletons, or encapsulating complex business logic outside of UI components.
 */
interface ApiServiceConfig {
    baseUrl: string;
    timeout: number;
}

class ApiService {
    private readonly config: ApiServiceConfig;
    public isActive: boolean = true;

    constructor(config: ApiServiceConfig) {
        this.config = config;
    }

    // Protected methods can be accessed by subclasses (e.g., UserService extends ApiService)
    protected logRequest(endpoint: string) {
        console.log(`[HTTP GET] ${this.config.baseUrl}${endpoint} (Timeout: ${this.config.timeout}ms)`);
    }

    public async get(endpoint: string) {
        this.logRequest(endpoint);
        // actual fetch logic would go here
        return { success: true };
    }
}

const userApi = new ApiService({ baseUrl: "https://api.app.com", timeout: 5000 });
userApi.get("/users/1");

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




/**
 * --- SOLUTIONS ---
 */
// 1. class User { private password!: string; }
// 2. class Shape {} class Circle extends Shape {}
// 3. class Robot implements Movable { move() {} }
