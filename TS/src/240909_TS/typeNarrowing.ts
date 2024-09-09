function f(p: number | string) {
  if (typeof p === "number") return p.toFixed();
  return p.toUpperCase();
}

let arr1: number[] | number = Math.random() > 0.5 ? [1, 2, 3] : 0;
if (Array.isArray(arr1)) {
  console.log((arr1.length += 1));
  console.log(arr1);
} else {
  console.log((arr1 += 1));
  console.log(arr1);
}

console.log("--------------------");

type Member = {
  id: number;
  name: string;
  addr: string;
  discountRate: number;
};

type Guest = {
  id: number;
  name: string;
  age: number;
};

let xxxx = {
  id: 1,
  name: "HKD",
  age: 26,
  addr: "yongsan",
  discountRate: 0.4,
};

let m: Member;
let g: Guest;

if ("age" in xxxx) {
  g = xxxx;
  console.log(g);
}

export {};

console.log("---------------");

type Member2 = {
  name: string;
  spend: number[];
  addr: string;
  discountRate: number;
};
type Guest2 = {
  name: string;
  spend: number;
  age: number;
};

const member: Member2 = {
  name: "hong",
  spend: [1000, 30000, 50000],
  addr: "yongsan",
  discountRate: 0.1,
};
const guest: Guest2 = {
  name: "kim",
  spend: 5500,
  age: 28,
};

const who = Math.random() > 0.5 ? member : guest;

let totalAmount: number;
if (typeof who.spend !== "number") {
  totalAmount = who.spend.reduce((s, c) => s + c, 0);
  console.log("🚀   totalAmount:", totalAmount);
} else {
  totalAmount = who.spend;
  console.log("🚀   totalAmount:", totalAmount);
}

// Error!! Property 'reduce' does not exist on type 'number'.
// totalAmount = who.spend.reduce((s, c) => s + c, 0);
