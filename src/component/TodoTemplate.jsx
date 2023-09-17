import "./TodoTemplate.css";

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="title">Todo List</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
