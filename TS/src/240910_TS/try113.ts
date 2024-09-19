interface User {
  id: number;
  name: string;
  //   name?: string;
}

interface Dept {
  id: number;
  dname: string;
  captain: string;
  //   dname?: string;
  //   captain?: string;
}

// interface Ud2 extends User, Dept {
//   addr: string;
// }
type Ud2 = (User | Dept) & { addr: string };

// 다음 코드가 오류가 없으면 통과!
const ud2: Ud2 = { id: 1, name: "HH", addr: "Seoul" };
const ud3: Ud2 = { id: 1, dname: "HH", captain: "HH", addr: "Seoul" };