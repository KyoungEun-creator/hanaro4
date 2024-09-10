// p.163
`destructuring`;
/*
다음 코드는 올바른가? 

function getDiffMillis(dt1, dt2) {
  const { getTime: getTime1 } = new Date(dt1); -> 구조 분해로 가져온 getTime 메서드는 this를 잃어버림!
  const { getTime: getTime2 } = new Date(dt2);
  return getTime1() - getTime2();
}
getDiffMillis('2021-01-01', '2021-01-02');
*/

function getDiffMillis(dt1, dt2) {
  const { getTime: getTime1 } = new Date(dt1);
  const { getTime: getTime2 } = new Date(dt2);
  const boundTime1 = getTime1.bind(new Date(dt1));
  const boundTime2 = getTime2.bind(new Date(dt2));
  return boundTime1() - boundTime2();
}
console.log(getDiffMillis("2021-01-01", "2021-01-02"));

function getDiffMillis2(dt1, dt2) {
  const d1 = new Date(dt1);
  const d2 = new Date(dt2);
  const { getTime: getTime1 } = d1;
  const { getTime: getTime2 } = d2;
  // call, apply를 통해 this를 명시적으로 설정
  // 절대값 처리
  return Math.abs(getTime1.call(d1) - getTime2.apply(d2));
}
console.log(getDiffMillis2("2021-01-01", "2021-01-02"));
