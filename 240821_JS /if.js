```조건문```;

sum = 0;
if (sum > 0 && sum <= 10) {
  console.log("sum = ", sum);
} else if (sum > 10) {
  console.log("sum is over 10");
} else {
  console.log("sum is zero");
}
console.log(sum > 10 ? "T" : "F");

// else if
const bloodTypeWithIf = "A";
let sports = "운동";
if (bloodTypeWithIf === "A") {
  sports = "gun shot";
} else if (bloodTypeWithIf === "B") {
  sports = "fencing";
} else if (bloodTypeWithIf === "O") {
  sports = "badminton";
} else if (bloodTypeWithIf === "AB") {
  sports = "baseball";
} else {
  sports = "nothing";
}
console.log("🚀 ~ sportsIf:", sports);

// switch
const bloodTypeWithSwitch = "O";
switch (bloodTypeWithSwitch) {
  case "A":
    sports = "gun shot";
    break;
  case "B":
    sports = "fencing";
    break;
  case "O":
    sports = "badminton";
    break;
  case "AB":
    sports = "baseball";
    break;
  default:
    sports = "nothing";
}
console.log("🚀 ~ sportsSwitch:", sports);

// 삼항 연산자 Good
x = 2;
let ret = x === 1 ? "one" : x === 2 ? "two" : x === 3 ? "three" : "nothing";
console.log("🚀 ~ ret:", ret);

// 삼항 연산자 Best
ret = (x === 1 ? "one" : "") || (x === 2 ? "two" : "") || (x === 3 ? "three" : "") || "else";

console.log("🚀 ~ ret:", ret);

// Exellent
let y = 2;
const alpha = ["zero", "one", "two", "three"];
console.log("🚀 ~ alpha[y]:", alpha[y] || "else");
console.log("🚀 ~ alpha[y]:", alpha[y] ?? "else"); // ??: null이거나 undefined일 때
