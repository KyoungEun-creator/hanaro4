const myName: string = "JKE";
const myAge: number = 24;
console.log(`Hello, ${myName}`);
console.log(`${myAge} years old`);

let x: number | string;
x = 1;
console.log("🚀   x:", x);
x = "abc";
console.log("🚀   x:", x);

const len = x.length;

let y: number | undefined = undefined;

const sltr = "LITERAL";
let nltr = 100;
let literal = "LITERAL";
literal = sltr;
let str: string;
str = "x";
str = sltr;
// str = nltr;

// string literal union type
let grade: "S" | "A" | "B" | "C";
// grade = "D";
grade = "S";
