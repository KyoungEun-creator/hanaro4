// 다음과 같이 올바른 더하기 연산을 하는 addPoints 함수를 작성하시오.
// (단, 소숫점 자리수는 긴쪽에 맞춘다)

function addPoints(a, b) {
  const maxLen = Math.max(a.toString().length, b.toString().length) - 2;
  const sumVal = a + b;
  console.log(sumVal.toFixed(maxLen));
}

addPoints(0.21354, 0.1);
addPoints(0.14, 0.28);
addPoints(0.34, 0.226);
