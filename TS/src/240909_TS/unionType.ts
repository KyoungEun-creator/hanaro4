type Person = {
  name: string;
  age: number;
  phone: number | string;
  addr?: string;
};

const hong1: Person = {
  name: "홍길동",
  age: 26,
  phone: 11112222,
};

hong1.name = "김길동"; // only string
console.log("🚀   hong1:", hong1);
// hong1.name = 1000; // Type 'number' is not assignable to type 'string'.

hong1.age = 30; // only number
// hong1.age = "30세"; // Type 'string' is not assignable to type 'number'.

hong1.phone = "010-1111-2222"; // string | number OK

hong1.addr; // string | undefined;

export {};
