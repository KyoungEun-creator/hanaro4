import { useState } from 'react';

export default function useToggle(defaultValue: boolean = false) {
  const [state, setState] = useState(defaultValue);

  const toggle = () => setState((pre) => !pre);

  return [state, toggle] as [boolean, () => void];
}
