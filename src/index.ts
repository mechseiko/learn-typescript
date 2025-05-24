// Typescript is a superset of Javascript


// SECTION 1 ------- FUNDAMENTALS 
console.log("Typescript")
let age : number = 20;
// age = "a"
if(age< 50)
    age+=10;
console.log(age)
let sales = 123_456_789;
let course: string = "TypeScript";
let is_published: boolean = true;
let level;
// Aviod using the any type as much as possible!


//THE ANY TYPE
const render = (document: any) => {
    console.log(document);
    // We can fix the type(document) erro we have above if we "-noImplicitAny": false, under the type checking section in the tsconfig.json file
}


// SECTION 2 -------- OBJECTS IN TYPESCRIPT
// ARRAYS
// let numbers: number[] = [1, 2, '3'];
// let numbers: number[] = [1, 2, 3];
let numbers: number[] = [];
// numbers[0] = 1;
// numbers[1] = 2;
numbers.forEach(n => n)



// TUPLES
// 1, 'Mosh'
// let user: [number,string] = [1, 'Mosh', 0]--COMPILATION ERROR
let user: [number,string] = [1, 'Mosh']
let userexp = user[0].toExponential
console.log(user[0].toLocaleString, userexp)
user.push(1)
// Tuples are useful when we have only two values-i.e key-value pairs



// ENUMS
const small = 1;
const medium = 2;
const large = 3;
// PascalCase
enum Size {Small = 0, Medium = 1, Large = 2};
// enum Size {Small = 1, Medium = 2, Large = 'l'};
let mySize: Size = Size.Medium;
console.log(mySize)
// node dist/index.js



// FUNCTIONS
// As a best practice, always annotate your functions and return types
const calculateTax = (income:number,taxYear = 2022):number => {
    if (taxYear < 2000) 
    return income * 1.2;
    return income * 1.3
    // undefined
}
calculateTax(10_000)
// "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */
// "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read. */
// // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
// "noImplicitReturns": true,          



// OBJECTS
// let employee: {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// } = {
//     id: 1,
//     name: "Mosh",
//     retire: (date: Date) => {
//         console.log(date)
//     }
// }



// SECTION 3 ---------- ADVANCED TYPES
// Type Aliasing
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}
let employee: Employee = {
    id: 1,
    name: "Mosh",
    retire: (date: Date) => {
        console.log(date)
    }
}



// Union Types
function kgToLbs(weight: number | string): number {
    // Narrowing
    if(typeof weight === "number")
        return weight * 2.2
    else
        return parseInt(weight) *2.2
}
kgToLbs(10);
kgToLbs("10")



// Intersection Types
type Draggable = {
    drag: () => void
}
type Resizable = {
    resize: () => void
}
type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}



// Literal Types (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";



// Nullable Types
const greet = (name:string) => {
    if(name)
        console.log(name.toUpperCase())
    else
        console.log("Not Name || Not of type string")
}
// "strictNullChecks": true,                         /* When type checking, take into account 'null' and 'undefined'. *
// greet(null)



// Optional Chaining
type Customer = {
    birthday: Date
}
function getCustomer(id:number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() }
}
// let customer = getCustomer(0);
// if(customer!== null && customer !== undefined)
//     console.log(customer.birthday);
let customer = getCustomer(1);

// Optional property access operator(OPAO)
console.log(customer?.birthday);
console.log(customer?.birthday?.getFullYear());

// Optional call
// let log: any = (message: string) => console.log(message)
let log: any = null;
log?.("a");





