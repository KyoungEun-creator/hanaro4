// p.135
import assert from "assert";

console.log("-------<문제1>-------");
/* 
[['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]] 배열을 객체로 만드시오. (makeObjectFromArray)

=> { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }
*/

const originArray = [
  ["A", 10, 20],
  ["B", 30, 40],
  ["C", 50, 60, 70],
];

console.log("-------방법1-------");
const makeObjectFromArray1 = (arr) => {
  const newObject = {};
  for (let i = 0; i < arr.length; i += 1) {
    const keys = arr[i][0];
    const values = arr[i].slice(1);
    newObject[keys] = values;
  }
  return newObject;
};

console.log(makeObjectFromArray1(originArray));

// test
assert.deepStrictEqual(
  makeObjectFromArray1([
    ["A", 10, 20],
    ["B", 30, 40],
    ["C", 50, 60, 70],
  ]),
  { A: [10, 20], B: [30, 40], C: [50, 60, 70] }
);

console.log("-------방법2-------");

const makeObjectFromArray2 = (arr) => {
  const newObject = {};
  for (const [key, ...values] of arr) {
    newObject[key] = values;
  }
  return newObject;
};
console.log(makeObjectFromArray2(originArray));

// test
assert.deepStrictEqual(
  makeObjectFromArray2([
    ["A", 10, 20],
    ["B", 30, 40],
    ["C", 50, 60, 70],
  ]),
  { A: [10, 20], B: [30, 40], C: [50, 60, 70] }
);

console.log("-------<문제2>-------");
/* 
위에서 만든 객체를 다시 배열로 만드시오. (makeArrayFromObject)

{ 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }

=> [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]]
*/

const sentObject = makeObjectFromArray2(originArray);
const makeArrayFromObject = (obj) => {
  const newArr = [];
  for (keys in obj) {
    newArr.push([keys, ...obj[keys]]);
  }
  return newArr;
};
console.log(makeArrayFromObject(sentObject));

// test
assert.deepStrictEqual(makeArrayFromObject(sentObject), [
  ["A", 10, 20],
  ["B", 30, 40],
  ["C", 50, 60, 70],
]);
