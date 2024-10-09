import { useState } from 'react';

export default function useToggle(defaultValue: boolean = false) {
  const [state, setState] = useState(defaultValue);

  const toggle = () => setState((pre) => !pre);

  //   const a = [state, toggle]; // (boolean | (() => void))[]
  //   const t = [state, toggle] as const; // readonly [boolean, () => void]: fixed array가 됨

  return [state, toggle] as const; // array가 아닌 tuple로 전달하기 위함
}
