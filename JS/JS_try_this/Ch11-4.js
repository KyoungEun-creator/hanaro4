// p.160
/*
const before = () => console.log('before....');
const after = (ret) => console.log('after...', ret);

const someFn = (name, greeting) => console.log(`${greeting}, ${name}`);
const someFn2 = (id, nickname, email, level) =>
  console.log(`${id}/${nickname}/${email}/${level}`);

const template = // 코드를 완성하세요.

const temp = template(someFn);    // before → someFn → after 실행
const temp2 = template(someFn2);  // before → someFn2 → after 실행

temp('sico', 'hello');
temp2(1, 'sico', 'sico@gmail.com', 5);
console.log('square of 7 =', template(n => n ** 2)(7));
*/

// const { rejects } = require("assert");
import { rejects } from "assert";

const before = () => console.log("before....");
const after = () => console.log("after...");

const someFn = (name, greeting) => console.log(`${greeting}, ${name}`);
const someFn2 = (id, nickname, email, level) => console.log(`${id}/${nickname}/${email}/${level}`);

const template =
  (f) =>
  async (...args) => {
    before();
    const ret = f(...args);
    // after();
    setTimeout(after);
    return ret;

    // return new Promise(resolve => {
    //   resolve(f(...args));
    // }).finally(after);
  };

const temp = template(someFn); // before → someFn → after 실행
const temp2 = template(someFn2); // before → someFn2 → after 실행
// await temp('sico', 'hello');
// // temp2(1, 'sico', 'sico@gmail.com', 5);
// console.log('square of 7 =', await template(n => n ** 2)(7));

const x = template((n) => n ** 2);
(async function ff() {
  await temp("sico", "hello");
  // temp2(1, 'sico', 'sico@gmail.com', 5);
  console.log("square of 7 =", await x(7));
})();
