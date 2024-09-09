// p.56

/*
다음과 같이 올바른 더하기 연산을 하는 addPoints 함수를 작성하시오.
(단, 소숫점 자리수는 긴쪽에 맞춘다)

0.21354 + 0.1   // 0.31354000000000004
0.14 + 0.28     // 0.42000000000000004
0.34 + 0.226    // 0.5660000000000001
function addPoints(a, b) {...}

addPoints(0.21354, 0.1)   // 0.31354
addPoints(0.14, 0.28)       // 0.42
addPoints(0.34, 0.226)     // 0.566
addPoints(10.34, 200.226) // 210.566
addPoints(0.413, -10.28)  // -10.137
*/

console.log("-----방법1------");
function addPoints(a, b) {
  const aLen = String(a).split(".")[1].length;
  const bLen = String(b).split(".")[1].length;
  const len = Math.max(aLen, bLen);
  const res = (a + b).toFixed(len);
  return console.log(res);
}
addPoints(0.21354, 0.1); // 0.31354
addPoints(0.21354, 0.1); // 0.31354
addPoints(0.14, 0.28); // 0.42
addPoints(0.34, 0.226); // 0.566
addPoints(10.34, 200.226); // 210.566
addPoints(0.413, -10.28); // -9.867

console.log("-----방법2------");
function addPoints2(a, b) {
  const aLen = String(a).length - String(Math.trunc(a)).length - 1;
  const bLen = String(b).length - String(Math.trunc(b)).length - 1;
  const totalLen = Math.max(aLen, bLen);
  const res = (a + b).toFixed(totalLen);
  return console.log(res);
}
addPoints2(0.21354, 0.1); // 0.31354
addPoints2(0.21354, 0.1); // 0.31354
addPoints2(0.14, 0.28); // 0.42
addPoints2(0.34, 0.226); // 0.566
addPoints2(10.34, 200.226); // 210.566
addPoints2(0.413, -10.28); // -9.867

console.log("-----방법3------");
function addPoints3(...args) {
  const lenList = [];
  for (let i = 0; i < args.length; i += 1) {
    const fullLen = String(args[i]).length;
    const firstLen = String(Math.trunc(args[i])) === "-0" ? 2 : String(Math.trunc(args[i])).length;
    lenList.push(fullLen - firstLen - 1);
  }
  const totalLen = Math.max(...lenList);
  const res = args.reduce(function add(sum, currVal) {
    return Number((sum + currVal).toFixed(totalLen));
  }, 0);
  return console.log(res);
}

addPoints3(10.34, 200.226, -12.1254); // 198.4406
addPoints3(10.34, 200.226, -12.1254, 1); // 199.4406
addPoints3(10.34, 200.226, -0.1254, 1); // 199.4406

// console.log(Math.trunc(-0.1254)); // -0
// console.log(String(Math.trunc(-0.1254)).length); // 1
