// 다음 코드는 올바른가?

function getDiffMillis1(dt1, dt2) {
  const { getTime: getTime1 } = new Date(dt1); // 2021-01-01T00:00:00.000Z
  const { getTime: getTime2 } = new Date(dt2); // 2021-01-02T00:00:00.000Z

  return console.log(getTime1 - getTime2);
}

console.log(getDiffMillis1("2021-01-01", "2021-01-02")); // NaN

// Heap Area에서의 주소값에 따라 같은 주소값에 해당하는 것만 this.()로 가져오는 것이 가능하다
// 갖고있지 않은 property를 원한다면 그것이 있는 곳(d1/d2)과 .bind를 한다
function getDiffMillis2(dt1, dt2) {
  const d1 = new Date(dt1);
  const d2 = new Date(dt2);
  const { getTime: getTime1 } = d1;
  const { getTime: getTime2 } = d2;
  return getTime1.bind(d1)() - getTime2.bind(d2)();
}
console.log(getDiffMillis2("2021-01-01", "2021-01-02")); // -86400000
