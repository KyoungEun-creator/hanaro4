// p.81

/* 
다음 user 객체에서 passwd 프로퍼티를 제외한 데이터를 userInfo 라는 변수에 할당하시오.

const user = {id: 1, name: 'Hong', passwd: 'xxx', addr: 'Seoul'}

console.log(userInfo); 
// 출력결과: {id: 1, name: 'Hong', addr: 'Seoul'}
*/

const user = { id: 1, name: "Hong", passwd: "xxx", addr: "Seoul" };

console.log("-----방법1------");
const { passwd, ...userInfo } = user;
console.log("🚀   userInfo:", userInfo);

console.log("-----방법2------");
function prac2() {
  const userInfo = { ...user };
  delete userInfo.passwd;
  console.log("🚀   userInfo:", userInfo);
}
prac2();
