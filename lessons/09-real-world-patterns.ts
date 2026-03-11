export {};
/**
 * Lesson 09: Real-World Patterns
 * 
 * In this lesson, we combine everything you've learned into practical, 
 * real-world patterns used in professional TypeScript codebases.
 * 
 * We will cover:
 * - API Response Handling (Discriminated Unions & Generics)
 * - The Repository Pattern (Classes, Interfaces, & Generics)
 * - State Management (Readonly & Utility Types)
 *
 * How to run this lesson:
 * npm run lesson:09
 */

// --- 1. API Response Handling ---
// In the real world, APIs can return success data or error messages.
// We use Discriminated Unions and Generics to handle this safely.

type ApiSuccess<T> = { status: "success"; data: T };
type ApiError = { status: "error"; message: string; code: number };

type ApiResponse<T> = ApiSuccess<T> | ApiError;

interface UserResponse {
  id: string;
  name: string;
}

function handleFetchUser(response: ApiResponse<UserResponse>) {
  // We use type narrowing to safely access properties
  if (response.status === "success") {
    // TypeScript knows `response.data` exists here
    console.log(`Fetched user: ${response.data.name}`);
  } else {
    // TypeScript knows `response.message` and `code` exist here
    console.error(`Error ${response.code}: ${response.message}`);
  }
}

// Simulating a success response
handleFetchUser({
  status: "success",
  data: { id: "u123", name: "Abdul Seiko" }
});


// --- 2. The Repository Pattern ---
// A common pattern to abstract data access logic.

interface IRepository<T> {
  getById(id: string): T | undefined;
  save(item: T): void;
}

interface Product {
  id: string;
  name: string;
  price: number;
}

class ProductRepository implements IRepository<Product> {
  private db: Record<string, Product> = {};

  getById(id: string): Product | undefined {
    return this.db[id];
  }

  save(item: Product): void {
    this.db[item.id] = item;
    console.log(`Saved product: ${item.name}`);
  }
}

const productRepo = new ProductRepository();
productRepo.save({ id: "p1", name: "Keyboard", price: 150 });
console.log(productRepo.getById("p1"));


// --- 3. Strict State Management ---
// Using `Readonly` to prevent accidental mutations in state objects.

interface AppState {
  user: UserResponse | null;
  theme: "light" | "dark";
  isLoading: boolean;
}

class Store {
  // Expose state as Readonly so consumers can't mutate it directly
  private state: AppState;

  constructor(initialState: AppState) {
    this.state = initialState;
  }

  getState(): Readonly<AppState> {
    return this.state;
  }

  // Only allow updates through a dedicated method (using Partial)
  updateState(updates: Partial<AppState>) {
    this.state = { ...this.state, ...updates };
    console.log("State updated:", this.state);
  }
}

const appStore = new Store({ user: null, theme: "light", isLoading: false });

const currentState = appStore.getState();
// currentState.theme = "dark"; // Error! Cannot assign to 'theme' because it is a read-only property.

appStore.updateState({ isLoading: true });
appStore.updateState({ theme: "dark", isLoading: false });


// --- 4. Try It Yourself ---
/**
 * Challenge:
 * 1. Create a `Task` interface (id: string, title: string, completed: boolean).
 * 2. Create a `TaskRepository` class that implements `IRepository<Task>`.
 * 3. Add a method `getAll()` to the class that returns an array of all tasks.
 */

// WRITE YOUR CODE HERE:


// YOUR CHALLENGE SOLUTION:

