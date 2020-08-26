import React from "react";

type CounterProps = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
};

function Counter({
  count,
  onIncrease,
  onDecrease,
  onIncreaseBy,
}: CounterProps) {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>+</button>
      {/* <input name = 'diff' onChange = {onChange} value = {diff} placeholder = '숫자를 입력해주세요'/> */}
      <button onClick={() => onIncreaseBy(5)}>+{5}</button>
    </div>
  );
}

export default Counter;
