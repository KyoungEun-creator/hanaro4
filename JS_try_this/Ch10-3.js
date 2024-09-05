// p.136
import assert from "assert";

/* 
원시값(primitive)만을 갖는 객체 kim을 복사하는 프로그램을 Object의 클래스 메소드 또는 spread(...) 연산자를  사용하지 말고 작성하시오.
*/

console.log("-------<문제1>-------");
/*
// [shallow copy] --> 주소값 복사, 새로운 메모리 할당 없음

const kim = {nid: 3, nm: 'Kim', addr: 'Pusan'};
const newKim = copyObject(kim);
newKim.addr = 'Daegu';
console.log(kim.addr !== newKim.addr); // true면 통과!
*/

const kim1 = { nid: 3, nm: "Kim", addr: "Pusan" };

const copyObject = (obj) => {
  const newObj = {};
  for (const key in obj) {
    newObj[key] = obj[key];
  }
  return newObj;
};

const newKim1 = copyObject(kim1);
console.log("🚀   newKim1-originObj:", newKim1);
assert.deepStrictEqual(kim1, newKim1);

newKim1.addr = "Daegu";
console.log("🚀   newKim1-newObj:", newKim1);

assert.notDeepStrictEqual(kim1, newKim1);
assert.deepStrictEqual(kim1.addr !== newKim1.addr, true);

console.log("-------<문제2>-------");
/*
// [deep copy] --> 완전히 독립적인 메모리

const kim = {nid: 3, nm: 'Kim', addr: {city: 'Pusan'}};
const newKim = copyObject(kim); 
newKim.addr.city = 'Daegu';
console.log(kim.addr.city !== newKim.addr.city); // true면 통과!
*/

const kim2 = { nid: 3, nm: "Kim", addr: { nationality: "Korea", city: "Pusan" } };

// object여야 copy할 거니까 obj인지 여부 확인 후에 집어넣는 재귀함수 필요
const copyObject2 = (obj) => {
  const newer = {};
  for (const k of Reflect.ownKeys(obj)) {
    newer[k] = obj[k];
  }
  return newer;
};
const newKim2 = copyObject2(kim2);
console.log("🚀   newKim2-originObj:", newKim2);

newKim2.addr.city = "Daegu";
console.log("🚀   newKim2-newObj:", newKim2);

console.log(kim2.addr.city !== newKim2.addr.city); // true면 통과!
