// p.134

/* 
const arr = [100, 200, 300, 400, 500, 600, 700];
1. for-in문을 사용하여 배열의 인덱스(키)를 출력하시오.
2. for-in문을 사용하여 배열의 원소(값)를 출력하시오. (of)

assert.deepStrictEqual(forInKeys(arr), Object.keys(arr));
assert.deepStrictEqual(forInValues(arr), Object.values(arr));
*/

import assert from "assert";

console.log("-------문제1-------");
const arr = [100, 200, 300, 400, 500, 600, 700];

console.log(Object.keys(arr));

const forInKeys = (arr) => {
  const keyArray = [];
  for (const keys in arr) {
    keyArray.push(keys);
  }
  return keyArray;
};
console.log(forInKeys(arr));

// test
assert.deepStrictEqual(forInKeys(arr), Object.keys(arr));

console.log("-------문제2-------");

console.log(Object.values(arr));

const forInValues = (arr) => {
  const valueArray = [];
  for (const keys in arr) {
    valueArray.push(arr[keys]);
  }
  return valueArray;
};
console.log(forInValues(arr));

// test
assert.deepStrictEqual(forInValues(arr), Object.values(arr));
