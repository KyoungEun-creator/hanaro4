const introduceError = (name: string, height?: number) => {
  console.log(`이름 : ${name}`);
  // Error : 'height' is possibly 'undefined'.
  // console.log(`키 : ${height + 10}`);
};

introduceError("김현준"); // OK
introduceError("김현준", undefined); // OK
// '선택적 매개변수'에는 항상 (| undefined) 가 유니언타입으로 추가 되어있기 때문!
introduceError("김현준", 170); // OK

console.log("-------------------");

const introduce2 = (name: string, height?: number) => {
  console.log(`이름 : ${name}`);
  // 내로잉을 통해서 타입 좁혀줌
  if (typeof height === "number") {
    console.log(`키 : ${height + 10}`);
  }
};
introduce2("김현준"); // OK
introduce2("김현준", undefined); // OK
introduce2("김현준", 170); // OK

console.log("-------------------");

const introduce3 = (name: string, height: number | undefined) => {
  console.log(`이름 : ${name}`);
  if (typeof height === "number") {
    console.log(`키 : ${height + 10}`);
  }
};
// introduce3("김현준"); // Error -> Expected 2 arguments, but got 1.
introduce3("김현준", undefined); // OK -> type에 undefined를 추가해줬기 때문
introduce3("김현준", 170); // OK

console.log("-------------------");

// Error: A required parameter cannot follow an optional parameter.
// const introduce4 = (name: string, height?: number, age: number) => {
//   console.log(`이름 :  ${name}`);
//   console.log(`나이 : ${age} 살`);
//   if (height) {
//     return console.log(`키 ${height + 10}cm`);
//   }
// };
