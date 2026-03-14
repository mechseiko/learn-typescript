export {};
/**
 * LESSON 14
 * Enums
 * 
 * Goal:
 * Learn how to define a set of named constants using Enums and when to use alternatives.
 * 
 * How to run:
 * npm run lesson:14
 */

console.log('lesson 14-enums');

/**
 * Enums allow us to define a set of named constants. TypeScript supports both
 * numeric and string-based enums.
 */

/**
 * BASIC EXAMPLE
 */
enum Direction {
    Up,
    Down,
    Left,
    Right
}

let move: Direction = Direction.Up; // Value is 0

enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}

/**
 * FRONTEND EXAMPLE
 * Enums are useful for mapping internal states to UI values, routing paths,
 * or managing distinct Application configurations.
 */
enum AppRoute {
    Home = "/",
    Dashboard = "/dashboard",
    Settings = "/settings",
    Profile = "/profile"
}

enum FetchStatus {
    Idle,
    Loading,
    Success,
    Error
}

function navigateTo(route: AppRoute) {
    console.log(`Router navigation triggered for: ${route}`);
}
navigateTo(AppRoute.Dashboard);

function renderButtonText(status: FetchStatus): string {
    switch (status) {
        case FetchStatus.Loading: return "Saving...";
        case FetchStatus.Success: return "Saved!";
        case FetchStatus.Error: return "Retry";
        default: return "Save Changes";
    }
}
console.log(renderButtonText(FetchStatus.Loading));

/**
 * COMMON MISTAKES
 */
// Many developers prefer "Union of Literals" over Enums for simplicity:
type AlternativeStatus = "active" | "inactive"; 
// Enums generate extra JS code, whereas Literal Unions disappear after compilation.

/**
 * PRACTICE CHALLENGES
 */

// 1. Create an enum 'Response' with 'Yes', 'No', and 'Maybe'.


// 2. Create a string enum 'LogLevel' (Info, Warn, Error).


// 3. Define a fruit enum and try to access its value by name.



/**
 * --- SOLUTIONS ---
 */
// 1. enum Response { Yes, No, Maybe }
// 2. enum LogLevel { Info = "INFO", Warn = "WARN", Error = "ERROR" }
// 3. console.log(Fruit.Apple);
