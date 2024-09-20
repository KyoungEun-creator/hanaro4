interface User {
  id: number;
  name: string;
}

interface Dept {
  id: number;
  dname: string;
  captain: string;
}

interface Ud2 {
  [k: string]: number | string; // 아래 조건도 모두 충족해야하기 때문
  id: number;
  addr: string;
}

// type Ud2 = (User | Dept) & { addr: string }; // <- 정답

// 다음 코드가 오류가 없으면 통과!
const ud2: Ud2 = { id: 1, name: "HH", addr: "Seoul" };
const ud3: Ud2 = { id: 1, dname: "HH", captain: "HH", addr: "Seoul" };
