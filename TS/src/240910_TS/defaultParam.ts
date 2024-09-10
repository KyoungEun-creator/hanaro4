const introduce4 = (name: string, height = 0) => {
  console.log(`이름 : ${name}`);
  console.log(`키 : ${height + 10}`);
};

introduce4("김현준"); // OK
introduce4("김현준", undefined);
introduce4("김현준", 170);
// introduce4("김현준", "이재현"); -> Error: Argument of type 'string' is not assignable to parameter of type 'number'.

console.log("----------------");
const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(oneToTen[400]?.toFixed(2));

console.log("----------------");
