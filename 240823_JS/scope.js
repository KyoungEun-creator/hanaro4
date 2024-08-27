function f(a) {
  console.log("outer f", a); // outer2에 먹힘
}

f(100); // outer2 f 100

{
  // block scope안의 function은 식별자만 hoisting됨
  function f(a) {
    console.log("block f", a); // => 최종보스
  }
  f(200); // block f 200
}

function f(a) {
  console.log("outer2 f", a);
}
f(500); // block f 500

{
  function f(a) {
    var v;
    {
      const b = 1; // const: block scope 이기 때문
      v = 5;
    }
    console.log("block f", a, v, b); // b is not defined
  }
  f(100);
}
