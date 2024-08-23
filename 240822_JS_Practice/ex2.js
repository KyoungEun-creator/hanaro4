// 다음 user 객체에서 passwd 프로퍼티를 제외한 데이터를 userInfo 라는 변수에 할당하시오.
// 출력결과: {id: 1, name: 'Hong', addr: 'Seoul'}

const user = { id: 1, name: "Hong", passwd: "xxx", addr: "Seoul" };

`방법1`;
const { passwd, ...rest } = user;
const userInfo1 = rest;
console.log(userInfo1);

`방법2`;
function ex2() {
  const { passwd, ...userInfo } = user;
  return console.log(userInfo);
}
ex2();

`방법3`;
function ex3() {
  const userInfo3 = { ...user };
  delete userInfo3.passwd;
  console.log(userInfo3);
}
ex3();
