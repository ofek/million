import { atom, useAtom } from 'jotai';
import { block } from 'million/react';

const countAtom = atom<number>(0);

const Counter = block(() => {
  const [count, setCounter] = useAtom(countAtom);

  return (
    <button onClick={() => setCounter((prev) => prev + 1)}>{count}</button>
  );
});

// eslint-disable-next-line import/no-default-export
export default Counter;
