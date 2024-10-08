/*
 고객이 주문한 상품의 총 금액을 요금표를 참고하여 계산하려고 한다. 에러가 발생하는 이유와 해결 방법을 고민해보자.
("아래와 같이 사이즈에 M이 아니라 MM으로 사이즈를 잘 못 기입했을 경우 TS 오류가 나면 통과");
*/

// type TSizeOption = {
//   id: "XS" | "S" | "M" | "L" | "XL";
//   price: number;
// };

const SIZE = [
  { id: "XS", price: 8000 },
  { id: "S", price: 10000 },
  { id: "M", price: 12000 },
  { id: "L", price: 14000 },
  { id: "XL", price: 15000 },
] as const;

const sizeOption1 = { XS: 1, S: 5, M: 2, L: 2, XL: 4 };

const totalPrice1: number = SIZE.reduce(
  (currPrice: number, size) => currPrice + sizeOption1[size.id] * size.price,
  0
);

// const sizeOption2 = { XS: 1, S: 5, MM: 2, L: 2, XL: 4 };
// const totalPrice2 = SIZE.reduce(
//   (currPrice, size) => currPrice + sizeOption2[size.id] * size.price,
//   0
// );
