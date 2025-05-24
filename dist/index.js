"use strict";
var _a;
console.log("Typescript");
let age = 20;
if (age < 50)
    age += 10;
console.log(age);
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let level;
const render = (document) => {
    console.log(document);
};
let numbers = [];
numbers.forEach(n => n);
let user = [1, 'Mosh'];
let userexp = user[0].toExponential;
console.log(user[0].toLocaleString, userexp);
user.push(1);
const small = 1;
const medium = 2;
const large = 3;
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
console.log(mySize);
const calculateTax = (income, taxYear = 2022) => {
    if (taxYear < 2000)
        return income * 1.2;
    return income * 1.3;
};
calculateTax(10000);
let employee = {
    id: 1,
    name: "Mosh",
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs("10");
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
const greet = (name) => {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Not Name || Not of type string");
};
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log("a");
// # sourceMappingURL=index.js.map