// 오늘 날짜의 요일을 출력하는 프로그램을 switch문을 사용해 작성해 보고,
// switch문을 사용하지 않는 더 간단한 방법도 찾아보세요.

`방법1`;
const weekNames1 = "일월화수목금토";
const today1 = new Date();
const todayWeekNum1 = today1.getDay();
// console.log("🚀 todayWeek1:", todayWeekNum1); // 0 ~ 6

let todayWeekName;
switch (todayWeekNum1) {
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
    "?";
}
console.log(`오늘은 ${todayWeekName}요일입니다.`);

// ---------------------------
`방법2`;
const weekNames2 = "일월화수목금토";
const today2 = new Date();
const todayWeek2 = today2.getDay();
// console.log("🚀 todayWeek:", todayWeek);
const weekList2 = [...weekNames2];
// console.log("🚀 weekList:", weekList);

console.log(`오늘은 ${weekList2[todayWeek2]}요일입니다.`);

// ---------------------------
`방법3`;
const weekNames3 = "일월화수목금토";
const today3 = new Date();
const todayWeek3 = today3.getDay();
console.log(`오늘은 ${weekNames3[todayWeek3]}요일입니다.`);

// ---------------------------
`방법4`;
const weekNames4 = [..."일월화수목금토"];
console.log("🚀 weekNames4:", weekNames4);
const today4 = new Date();
const todayWeek4 = today4.getDay();
console.log(`오늘은 ${weekNames4[todayWeek4]}요일입니다.`);
