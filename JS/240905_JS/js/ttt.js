import { WEEKS } from "../utils/date-utils";
import { debounce, throttle } from "../utils/timer-utils";

const getNextWeek = () => {
  let widx = -1;
  return () => {
    widx += 1;
    if (widx >= WEEKS.length) widx = 0;
    return `${WEEKS[widx]}요일`;
  };
};

const nextWeekFunction = {
  kor: getNextWeek(),
  math: getNextWeek(),
};

const setWeek = (subject) => {
  // console.log('setWeek!!', subject);
  // const nextWeekFn = subject === 'math' ? mathWeek : korWeek;
  document.getElementById(subject).innerText = nextWeekFunction[subject]();
};

export const throttleSetWeek = throttle(setWeek, 500);

const debounceSearch = debounce((e) => {
  // console.log("debounceSearch>>", e.target.value, e);
  console.log(`${new Date().toISOString()} search>> ${e.target.value}`);
}, 500);

window.addEventListener("load", () => {
  const fnKor = debounce(() => {
    setWeek("kor");
  }, 500);

  document.getElementById("btnKor").addEventListener("click", fnKor);

  document.getElementById("search").addEventListener("keyup", debounceSearch);
});

// function testing() {
//   // test code
//   let runCnt = 0;
//   const subjects = ["Kor", "Math"];
//   const intl = setInterval(() => {
//     runCnt += 1;
//     if (runCnt > 20) clearInterval(intl);
//     document.getElementById(`btn${subjects[runCnt % 2]}`).click();
//     // if (runCnt % 2 === 0)
//     //   document.getElementById('btnKor').click();
//     // else
//     //   document.getElementById('btnMath').click();
//   }, 200);
// }
// testing();
