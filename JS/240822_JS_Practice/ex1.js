// user 객체를 받아서 id와 name을 출력하는 함수를 3개의 함수로 작성하시오.
// (Function signature를 3개 이상으로 표현하기)
// 1.    function f1(user) { … }
// 2.    function f2(<이 부분을 작성하시오>) {...}
// 3.    const f3 = <이 부분을 작성하시오>

const hong = { id: 1, name: "Hong" };
const lee = { id: 2, name: "Lee" };

`방법1`;
function f1(user) {
  console.log(`f1 -> id: ${user.id}, name: ${user.name}`);
}
f1(hong);

`방법2`;
function f2({ id, name }) {
  console.log(`f2 -> id: ${id}, name: ${name}`);
}
f1(hong);

`방법3`;
const f3 = ({ id, name }) => {
  console.log(`f3 -> id: ${id}, name: ${name}`);
};
