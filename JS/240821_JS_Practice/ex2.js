// 1 ~ 10 사이의 정수에 대해 제곱근을 소숫점 3자리까지 출력하시오.
// Math.sqrt() 사용, 무리수만 출력!

`방법1`;
for (let i = 1; i <= 10; i += 1) {
  Math.sqrt(i) % 1 !== 0 && console.log(i, Math.sqrt(i).toFixed(3));
}

`방법2`;
for (let i = 1; i <= 10; i += 1) {
  const s = Math.sqrt(i);
  if (s % 1 !== 0) console.log(i, +s.toFixed(3));
}
