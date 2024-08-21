// bit 연산자

let a = 0b1010;
let b = 0b1100;

const and = a & b; // 하나라도 0이면 0
console.log("🚀 ~ c:", and.toString(2));

const or = a | b; // 하나라도 1이면 1
console.log("🚀 ~ c:", or.toString(2));

const xor = a ^ b; // 다르면 참
console.log("🚀 ~ c:", xor.toString(2));

const notA = ~a.toString(2);
console.log("🚀 ~ notA:", notA);
const notB = ~b.toString(2);
console.log("🚀 ~ notB:", notB);

console.log(a >> 1); // 5 (101)
console.log(a << 1); // 20 (10100)
console.log(b >> 1); // 6 (110)
console.log(b << 1); // 24 (11000)
