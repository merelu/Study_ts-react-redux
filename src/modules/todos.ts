//액션 타입 선언

const ADD_TODO = "todos/ADD_TODO" as const;
const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;
const REMOVE_TODO = "todos/REMOVE_TODO" as const;

let nextId = 1; //새로운 항목을 추가 할 때 사용 할 고유 ID

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: {
    id: nextId++,
    text,
  },
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
});

//모든 액션 객체들에 대한 타입준비
type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>;

//상태에서 사용 할 할 일 항목 데이터 타입 정의
export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

//이 모듈에서 관리할 상태는 Todo 객체로 이루어진 배열
export type TodosState = Todo[];

//초기 상태 선언
const initialState: TodosState = [];

function todos(
  state: TodosState = initialState,
  action: TodosAction
): TodosState {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        //action.payload 객체 안의 값이 모두 유추된다.
        id: action.payload.id,
        text: action.payload.text,
        done: false,
      });
    case TOGGLE_TODO:
      return state.map((todo) =>
        //payload가 number인것이 유추됩니다.
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case REMOVE_TODO:
      //payload가 number인것이 유추됩니다.
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export default todos;
