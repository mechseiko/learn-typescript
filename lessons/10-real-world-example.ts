export {};
/**
 * Lesson 10: Real-World Frontend Example
 * 
 * In this final lesson, we look at how TypeScript is used in a real frontend environment.
 * We'll cover:
 * - DOM Types (Handling buttons, inputs, and events)
 * - Type Casting (Using 'as' for DOM elements)
 * - Integration with external data (combining Generics and Interfaces)
 * - Extending Global Interfaces (Optional but powerful)
 * 
 * How to run this lesson:
 * npm run lesson:10
 */

// --- 1. Working with the DOM ---
// TypeScript has built-in types for all HTML elements (HTMLButtonElement, HTMLInputElement, etc.)

// In a real browser, this would select an element.
// We use 'as HTMLButtonElement' to tell TS exactly what kind of element it is.
const submitBtn = { 
    innerText: "Submit",
    addEventListener: (event: string, cb: () => void) => { console.log(`Listener added for ${event}`); }
} as unknown as HTMLButtonElement; 

submitBtn.innerText = "Click Me!"; // TS knows 'innerText' exists on HTMLButtonElement

// --- 2. Advanced Event Handling ---
function handleInput(event: Event) {
    // We cast the target to HTMLInputElement to access '.value'
    const target = event.target as HTMLInputElement;
    console.log(`Input value changed to: ${target.value}`);
}

// --- 3. Final Synthesis: A Simple App Pattern ---
interface Task {
    id: number;
    title: string;
    completed: boolean;
}

class TaskApp {
    private tasks: Task[] = [];

    addTask(title: string): void {
        const newTask: Task = {
            id: Date.now(),
            title,
            completed: false
        };
        this.tasks.push(newTask);
        console.log(`Task added: "${title}"`);
        this.render();
    }

    toggleTask(id: number): void {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            console.log(`Task "${task.title}" is now ${task.completed ? 'completed' : 'pending'}`);
        }
    }

    private render(): void {
        console.log("--- Current Tasks ---");
        this.tasks.forEach(t => {
            console.log(`${t.completed ? '[x]' : '[ ]'} ${t.title} (ID: ${t.id})`);
        });
    }
}

const myApp = new TaskApp();
myApp.addTask("Learn TypeScript Basics");
myApp.addTask("Master Generics");

// --- 4. Try It Yourself ---
/**
 * Challenge:
 * 1. Add a 'deleteTask(id: number)' method to the TaskApp class.
 * 2. Update the 'render' method to show the total count of tasks.
 * 3. Create a new instance of TaskApp and add at least 3 tasks.
 */

// WRITE YOUR CODE HERE:


// YOUR CHALLENGE SOLUTION:

console.log("\nCongratulations! You've completed the Learn TypeScript curriculum! 🎉");
