let a = 1;
let b = 2;
let c = (a++, b++);
let d = (a--, b + a);
console.log("🚀 ~ d:", d);

const first = "";
const last = "Bob";
// 삼항연산자 Good Code
console.log(`[${first}${first ? " " : ""}${last}]`);
// Best Code
console.log(`[${first}${first && " "}${last}]`);
