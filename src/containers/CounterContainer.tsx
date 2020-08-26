import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { increase, decrease, increaseBy } from "../modules/counter";
import Counter from "../components/Counter";

function CounterContainer() {
  //상태를 조회합니다. 상태를 조회 할 때에는 state의 타입을 RootState로 지정해야한다.
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch(); //디스패치 함수를 가져온다.

  //각 액션들을 디스패치하는 함수들을 만들어준다.
  const onIncrease = () => {
    dispatch(increase());
  };
  const onDecrease = () => {
    dispatch(decrease());
  };
  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };

  return (
    <Counter
      count={count}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
    />
  );
}

export default CounterContainer;
