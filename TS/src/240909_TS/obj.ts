let xuser: { id: number; name: string };
xuser = { id: 1, name: "xx" }; // OK
// xuser = { id: 1 }; // Error (Property 'name' missing in type)
const tmp = { id: 1, name: "xx", age: 30 };
xuser = tmp;

// 타입 별칭(type alias)
type TUser = {
  id: number;
  name: string;
};

let hong: TUser;
hong = { id: 1, name: "Hong" }; // OK
// hong = { id: 1 }; // Error (name property missing)
// hong = { id: 1, name: "Hong", addr: "Pusan" }; // Error(not assignable)  Freshness!
hong = { id: 1, name: "Hong", addr: "Pusan" } as TUser; // OK (turn-off Freshness!)

type TEmp = {
  id: number;
  name: string;
};
const user1 = { id: 1, name: "JKE", addr: "Seoul" };

const arr: TEmp[] = [{ id: 1, name: "HKD", addr: "Seoul" }, user1];
console.log("🚀   arr:", arr);

// 두 개의 연결을 끊어버렸기 때문에 안 됨
// const arr2: [TEmp, TEmp] = [{ id: 1, name: "HKD", addr: "Seoul" }, user1];

export {};
