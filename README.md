# 🚀 Learn Typescript

Welcome to your hands-on TypeScript learning environment! This repository is designed specifically for **frontend developers** migrating from JavaScript.

Instead of reading long documentation, you'll learn by **doing**. Each lesson is a `.ts` file filled with explanations, examples, and challenges.

## 🎯 Who Is This For?
- JavaScript developers looking to add type safety to their projects.
- Frontend devs working with React, Vue, or Angular.
- Anyone who wants a quick, interactive way to learn TypeScript fundamentals.

## 🛠️ Setup Instructions

To get started, make sure you have [Node.js](https://nodejs.org/) installed, then follow these steps:

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run a Lesson**:
   Each lesson has a dedicated NPM script. For example, to run the first lesson:
   ```bash
   npm run lesson:01
   ```

## 📚 The Curriculum

The lessons are located in the `lessons/` folder. We recommend going through them in order:

- **[Lesson 01: Basic Types](./lessons/01-basic-types.ts)**: Strings, numbers, booleans, and arrays.
- **[Lesson 02: Interfaces & Types](./lessons/02-interfaces-types.ts)**: Defining the "shape" of objects.
- **[Lesson 03: Functions](./lessons/03-functions.ts)**: Typing parameters and return values.
- **[Lesson 04: Unions & Enums](./lessons/04-unions-enums.ts)**: Handling multiple types and named constants.
- **[Lesson 05: Generics](./lessons/05-generics.ts)**: Creating reusable, flexible type components.
- **[Lesson 06: Utility Types](./lessons/06-utility-types.ts)**: Essential tools like `Partial`, `Pick`, and `Omit`.
- **[Lesson 07: Type Guarding](./lessons/07-type-guarding.ts)**: Advanced narrowing and discriminated unions.
- **[Lesson 08: Classes](./lessons/08-classes.ts)**: OOP patterns and access modifiers.
- **[Lesson 09: Real-World Patterns](./lessons/09-real-world-patterns.ts)**: API handling, Repository pattern, and State management.
- **[Lesson 10: Real-World Example](./lessons/10-real-world-example.ts)**: Frontend patterns, DOM types, and final synthesis.

## ✍️ How to Learn
Each file follows a standard format:
1. **Explanation**: Clear headers and comments explaining the concept.
2. **Examples**: Practical code snippets showing the feature in action.
3. **Try It Yourself**: Sections where you should modify the code and see how TypeScript reacts.
4. **Mini Challenge**: A small task to test your knowledge.

> [!TIP]
> Use a code editor like VS Code. It will highlight type errors in real-time, which is the best way to understand what TypeScript is catching for you!

## ✅ Verification
You can run a project-wide type check at any time:
```bash
npm run check
```

---
Happy Coding! 💻