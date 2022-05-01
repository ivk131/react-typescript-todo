import React from "react";
import { Todo } from "../Model";
import "./styles.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <ul>
          <li>{todo.todo} </li>
        </ul>
      ))}
    </div>
  );
};

export default TodoList;
