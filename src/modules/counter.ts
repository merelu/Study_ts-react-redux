//액션 타입을 선언합니다.
//뒤에 as const를 붙여줌으로써 나중에 액션 객체를 만들게 action.type의 값을 추론하는 과정에서
//action.type이 string으로 추론되지 않고 'counter/INCREASE' 와 같이 실제 문자열 값으로 추론 되도록 해줍니다.
const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;
const INCREASE_BY = "counter/INCREASE_BY" as const;

export const increase = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  //액션에 부가적으로 필요한 값을 payload라는 이름으로 통일한다.
  //이는 FSA라는 규칙인데 이 규칙을 적용하면 액션들이 모두 비슷한 구조로 이루어져 있게 되어 추후 다룰 때도 편하고
  //읽기 쉽고, 액션 구조를 일반화함으로써 액션에 관련된 라이브러리를 사용 할 수 있게 해줍니다.
  //다만, 무조건 꼭 따를 필요는 없습니다.
  payload: diff,
});

//모든 액션 객체들에 대한 타입을 준비해줍니다.
//REturnType<typeof ______>는 특정 함수의 반환값을 추론해줍니다.
//상단부에서 액션타입을 선언 할 때 as const를 하지 않으면 이 부분이 제대로 작동하지 않는다.
type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

function counter(
  state: CounterState = initialState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default counter;
