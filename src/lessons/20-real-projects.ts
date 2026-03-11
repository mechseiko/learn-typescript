export {};
/**
 * LESSON 20
 * TypeScript in Real Frontend Projects
 * 
 * Goal:
 * Learn how to structure and apply all TypeScript concepts in a real project.
 */

/**
 * Real projects involve complex interfaces, global state, and strict configurations.
 * This final lesson brings together everything we've learned.
 */

/**
 * BASIC EXAMPLE
 */
// Organizing common types in a 'types' folder
// src/types/user.ts
// src/types/api.ts

/**
 * FRONTEND EXAMPLE: A full feature implementation
 */
interface Product {
    id: string;
    name: string;
    price: number;
}

interface CartItem extends Product {
    quantity: number;
}

class ShoppingCart {
    private items: CartItem[] = [];

    addItem(product: Product) {
        const existing = this.items.find(i => i.id === product.id);
        if (existing) {
            existing.quantity++;
        } else {
            this.items.push({ ...product, quantity: 1 });
        }
    }

    getTotal(): number {
        return this.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }
}

/**
 * COMMON MISTAKES
 */
// Using 'any' as a shortcut when things get complex. 
// PRO TIP: Stay strict! The time you save now using 'any' will be lost later in debugging.

/**
 * PRACTICE CHALLENGES
 */

// 1. Refactor the ShoppingCart to use a generic 'Storage' interface.


// 2. Create a union of all possible Events for a simple UI (click, submit, change).


// 3. Final Boss Challenge: Design a simple Redux-like state management system with types.


console.log("\nCongratulations! You've finished the 20-lesson TypeScript journey! 🎉🚀");
