import TodoTemplate from "./component/TodoTemplate";
import TodoList from "./component/TodoList";
import TodoInsert from "./component/TodoInsert";
import { useCallback, useState, useRef } from "react";
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트의 기초 알아보기",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링 해보기",
      checked: true,
    },
    {
      id: 3,
      text: "일정관리 앱 만들어보기",
      checked: false,
    },
  ]);

  // 초기값 4 그 다음 추가될때마다 nextId.current 값 증가
  //(text) => { ... } onInsert 함수의 본문 text 파라미터를 받아서 새로운 할 일 아이템의 내용으로 사용
  //setTodos(todos.concat(todo)); setTodos는 todos 배열에 새로운 todo 객체를 추가하여 상태를 업데이트
  // concat 메서드를 사용하여 배열을 병하바고, todo를 기존 todos 배열에 추가
  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  //해당 id를 가진 항목을 목록에서 제거하고, 업데이트된 할 일 목록을 상태로 저장한다.
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  // 항목의 완료 상태를 토글하는 기능 구현
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
