```반복문```;

`1) for문`;
var sum = 0;
for (let i = 1; i <= 100; i += 1) {
  sum += i;
}
// for (let i = 1; i <= 100; sum = sum + (i += 1));
console.log("🚀 for - sum:", sum);

`2) while문`;
sum = 0;
let i = 1;
while (i <= 100) {
  sum += i;
  i += 1;
}
console.log("🚀 while - sum:", sum);

`3) do-while문`;
sum = 0;
i = 0;
do {
  i += 1;
  sum += i;
} while (i < 100);
console.log("🚀 do~while - sum:", sum);
