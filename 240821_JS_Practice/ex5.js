// 추가문제) 주어진 값의 sqrt 값을 출력하고,
// 1 큰 수가 무리수가 아닐 때 까지 sqrt 값을 출력하는 함수를 작성하시오.

function printIrr(i) {
  let x = i;
  console.log(x, Math.sqrt(x).toFixed(3));
  while (Math.sqrt(x + 1) % 1 !== 0) {
    console.log(x + 1, Math.sqrt(x + 1).toFixed(3));
    x += 1;
  }
}

printIrr(5);
printIrr(9);
