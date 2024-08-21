// 다음과 같이 올바른 더하기 연산을 하는 addPoints 함수를 작성하시오.
// (단, 소숫점 자리수는 긴쪽에 맞춘다)

`방법1`;
// function addPoints1(a, b) {
//   const maxLen = Math.max(a.toString().length, b.toString().length) - 2;
//   const sumVal = a + b;
//   console.log(sumVal.toFixed(maxLen));
// }

// addPoints1(0.21354, 0.1);
// addPoints1(0.14, 0.28);
// addPoints1(0.34, 0.226);

`방법2`;
// 정수부분이 무조건 0이 아니라면?

function getLength(n) {
  return String(n).split(".")[1].length;
}

function addPoints2(a, b) {
  const aLen = getLength(a);
  const bLen = getLength(b);
  const maxLen = Math.max(aLen, bLen);
  const sumVal = a + b;
  console.log(sumVal.toFixed(maxLen));
}

addPoints2(10.34, 200.226); // 210.566
addPoints2(0.143, 10.28); // 10.423
addPoints2(4000.34, 100.226); // 4100.566
addPoints2(0.143, -10.28); // -10.137
addPoints2(4000.34, -100.226); // 3900.114
