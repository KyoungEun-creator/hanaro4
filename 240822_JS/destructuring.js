`destructuring`;

const user = { id: 1, name: "Hong", age: 29 };
```
let { id, name, addr } = user; // let id = user.id = 1;  let addr = undefined;
let { id, ...info } = user; // let id = 1; let info = { name: 'Hong', age: 29 }
```;

const { id: ida, name: nm } = { id: 125, name: "Joe" };
```
console.log("🚀 ida:", ida); // 125 :: id를 'ida'라는 이름(변수명)으로 주세요
console.log("🚀 nm:", nm); // "Joe" :: name를 'nm'라는 이름으로 주세요
```;

let q, s, r;
({ r = q * 10, q, s } = { q: 10, s: 20 });
console.log(q, s, r); // 10 20 NaN

const { 0: a1, 1: a2 } = [1, 2];
console.log("🚀   a1:", a1); // 1
console.log("🚀   a2:", a2); // 2
// a1 = 5; // TypeError: Assignment to constant variable.
console.log("🚀   a1:", a1); // 1

// default 값 부여
const { id, name, addr = "Seoul" } = { id: 1, name: "Hong" };

// ------------------------------------------

`swapping`;

// 기존 방식 old swap
let a = 1;
let b = 2;
let t = a;
a = b;
b = t;
console.log("🚀 a, b:", a, b);

// new swap
a = 1;
b = 2;
[a, b] = [b, a];
console.log("🚀 a, b:", a, b);

// new swap exercise
const arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];
console.log("🚀 arr:", arr); // [2, 1]
