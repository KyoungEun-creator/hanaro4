// 다음과 같이 올바른 더하기 연산을 하는 addPoints 함수를 작성하시오.
// (단, 소숫점 자리수는 긴쪽에 맞춘다)

`방법1`;
function addPoints1(a, b) {
  const maxLen = Math.max(a.toString().length, b.toString().length) - 2;
  const sumVal = a + b;
  console.log(sumVal.toFixed(maxLen));
}

addPoints1(0.21354, 0.1); // 0.31354
addPoints1(0.14, 0.28); // 0.42
addPoints1(0.34, 0.226); // 0.566

// ---------------------
// 정수부분이 무조건 0이 아니라면?

`방법2`;

// 소수부분 길이 구하는 함수
function getLength(n) {
  // 소수점이 없는 정수라면?
  return String(n).split(".")[1]?.length ?? 0;
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
addPoints2(0.143, 10); // 10.143

// ---------------------

`방법3`;
function getLength3(n) {
  return n.toString().length - Math.trunc(n).toString().length - 1;
}

function addPoints3(a, b) {
  // const alen = a.toString().length - Math.trunc(a).toString().length - 1;
  // const blen = b.toString().length - Math.trunc(b).toString().length - 1;
  const aLen = getLength3(a);
  const bLen = getLength3(b);
  const maxLen = aLen > bLen ? aLen : bLen;
  console.log((a + b).toFixed(maxLen));
}
addPoints3(10.34, 200.226); // 210.566
addPoints3(0.143, 10.28); // 10.423
addPoints3(4000.34, 100.226); // 4100.566
addPoints3(0.143, -10.28); // -10.137
addPoints3(4000.34, -100.226); // 3900.114
