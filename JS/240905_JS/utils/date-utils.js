import moment from "moment";

// 현재 날짜(또는 특정 날짜를 받으면 해당 월)의 달력을 출력하시오.
const todayYear = moment().year();
const todayMonth = moment().month() + 1;
const todayDate = moment().date();
// console.log("🚀   todayDate:", todayDate);
const firstDayOfMonth = new Date(`${todayYear}-${todayMonth}-1`).getDay(); //9월1일->일요일(0)
// console.log("🚀   firstDayOfMonth:", firstDayOfMonth);
const getDaysInMonth = moment().daysInMonth();
// console.log("🚀   getDaysInMonth:", getDaysInMonth);

const WEEKS = ["일", "월", "화", "수", "목", "금", "토"];

const todayDay = moment().format("YYYY년 MM월");
console.log(todayDay);
console.log(...WEEKS);

export const calendar = () => {
  let calendar = [];

  // 첫 번째 주의 첫 번째 요일 전까지 빈칸을 채움
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendar.push("  ");
  }

  // 1일부터 해당 월의 마지막 날까지 숫자를 배열에 채움
  for (let x = 1; x <= getDaysInMonth; x += 1) {
    if (x === todayDate) {
      calendar.push(`\x1b[31m${x < 10 ? ` ${x}` : x}\x1b[0m`);
    } else {
      calendar.push(x < 10 ? ` ${x}` : x);
    }
  }

  // 달력을 주 단위로 출력
  for (let i = 0; i < calendar.length; i += 7) {
    console.log(calendar.slice(i, i + 7).join(" "));
  }
};
calendar();
