```number```;

// 정수 범위
console.log(`정수 범위: ${Number.MIN_SAFE_INTEGER} ~ ${Number.MAX_SAFE_INTEGER}`);
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); // false

// 반올림해서 정수화
Math.round(123.45); // 123
Math.round(123.56); // 124

// 반올림하지 않고 정수 (소숫점을 날려버림)
Math.trunc(123.56); // 123

// 해당 자릿수까지 반올림 (string 형변환됨 주의)
f = 123.456;
f.toFixed(1); // '123.5'
f.toFixed(2); // '123.46'
Number(f.toFixed(2)); // 123.46
parseFloat(f.toFixed(2)); // 123.46
+f.toFixed(2); // 123.46

// 올림
Math.ceil(123.456); // 124

// 내림
Math.floor(123.456); // 123
Math.floor(123.67); // 123
