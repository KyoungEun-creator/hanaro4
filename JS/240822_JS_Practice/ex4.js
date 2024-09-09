// 다음과 같이 key를 전달하면 해당 값의 첫 글자를 제외한 문자를 리턴하는 함수를 destructing을 최대한 활용하여 (가),(나),(다) 부분을 작성하시오.

// const user = {name: 'Hong', passwd: 'xyz', addr: 'Seoul'};
// function getValueExceptInitial(k) {
//   const (가) = user;
//   const (나) = [...val];
//   return (다);
// }
// console.log(getValueExceptInitial('name')); // 'ong'
// console.log(getValueExceptInitial('passwd')); // 'yz'
// console.log(getValueExceptInitial('addr')); // 'eoul'

`방법1`;
const user1 = { name: "Hong", passwd: "xyz", addr: "Seoul" };
function getValueExceptInitial1(k) {
  const { [k]: val } = user1;
  // console.log(val); // xyz
  // console.log([...val]); // [ 'x', 'y', 'z' ]
  const [, ...rest] = [...val]; // 맨앞에 하나 빼고 나머지
  // console.log([...rest]); // [ 'y', 'z' ]
  return rest.join("");
}
getValueExceptInitial1("passwd");

`방법2`;
const user2 = { name: "Hong", passwd: "xyz", addr: "Seoul" };
function getValueExceptInitial2(k) {
  const { [k]: val } = user2;
  const [, ...rest] = val; // string은 iterator이기 때문에 가능
  console.log(...rest);
  return rest.join(" ");
}
getValueExceptInitial2("passwd");

`방법3`;
const user3 = { name: "Hong", passwd: "xyz", addr: "Seoul" };
function getValueExceptInitial2(k) {
  const { [k]: val } = user3;
  const [, ...rest] = typeof val === "string" ? val : [, ""]; // Good
  console.log(...rest);
  return rest.join(" ");
}
getValueExceptInitial2("passwd");

`방법4`;
const user4 = { name: "Hong", passwd: "xyz", addr: "Seoul" };
function getValueExceptInitial2(k) {
  const { [k]: val } = user4;
  if (typeof val !== "string") return; // Exellent
  const [, ...rest] = val;
  console.log(...rest);
  return rest.join(" ");
}
getValueExceptInitial2("passwd");
