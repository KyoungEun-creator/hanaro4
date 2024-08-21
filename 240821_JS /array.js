```array```;

arr = [1, 2, 3];
arr.hasOwnProperty("length"); // true

const weekNames = "일월화수목금토";
console.log("🚀 weekNames:", [...weekNames]); // ['일', '월', '화', '수', '목', '금', '토']

user = { id: 1, name: "Lucy" };
delete user.name;
console.log(user); // { id: 1 }
