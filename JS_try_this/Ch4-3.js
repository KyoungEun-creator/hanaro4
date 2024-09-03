// p.54

/*
오늘 날짜의 요일을 출력하는 프로그램을 switch문을 사용해 작성해 보고, switch문을 사용하지 않는 더 간단한 방법도 찾아보세요.
// const today = new Date();  today.getDay();
오늘은 금요일입니다.  (const WEEK_NAMES = '일월화수목금토')
*/

console.log("-----방법1------");
const today = new Date();
let todayWeekNum = today.getDay();
// console.log("🚀   todayWeekNum:", todayWeekNum);

let todayWeekName;
switch (todayWeekNum) {
  case 0:
    todayWeekName = "일";
    break;
  case 1:
    todayWeekName = "월";
    break;
  case 2:
    todayWeekName = "화";
    break;
  case 3:
    todayWeekName = "수";
    break;
  case 4:
    todayWeekName = "목";
    break;
  case 5:
    todayWeekName = "금";
    break;
  case 6:
    todayWeekName = "토";
    break;
  default:
    todayWeekName = "X";
    break;
}
console.log(`오늘은 ${todayWeekName}요일입니다.`);

console.log("-----방법2------");

const WEEK_NAMES = "일월화수목금토";
const today2 = new Date();
let todayWeekNum2 = today.getDay();
console.log(`오늘은 ${WEEK_NAMES[todayWeekNum2]}요일입니다.`);
