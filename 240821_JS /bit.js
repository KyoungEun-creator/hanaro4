```bit 연산자```;

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

`practice`;
const R = 1; // 0b001
const W = 2; // 0b010
const E = 4; // 0b100

let auth = parseInt("011", 2); // 2진수인 "011"을 10진수로 정수화하라
console.log("🚀 ~ auth:", auth); // 3
console.log("🚀 ~ auth(2):", `0b${auth.toString(2)}`); // 다시 2진수로

const hasWriteAuth = auth & W; // 011 & 010
console.log("🚀 ~ hasWriteAuth:", hasWriteAuth); // 010 (2)

const hasExeAuth = !!(auth & E); // !!(011 & 100) // !!(000)
console.log("🚀 ~ hasExeAuth:", hasExeAuth); // False

const hasReadAndExeAuth = !!(auth & (R | E)); // !!(011 & (001 | 100)) === !!(011 & 101) === !!001
console.log("🚀 ~ hasReadAndExeAuth:", hasReadAndExeAuth); // True

// XOR: 같으면 0, 다르면 1
auth = auth ^ E; // 011 ^ 100
console.log("🚀 ~ auth:", auth); // 111 (7)
