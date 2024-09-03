// p.74

/* 
다음 arr의 첫 번째 원소와 두 번째 원소를 swap 해보세요.
( [a, b] = [b, a]; )

const arr = [1,2];

<이 부분을 작성하시오>;
console.log(arr); 
// 출력결과: [2, 1]
*/

const arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];
console.log(arr);
