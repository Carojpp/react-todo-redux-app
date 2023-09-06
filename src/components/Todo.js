import React from "react";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/actions";
import {
  TodoContainer,
  TodoName,
  TodoDescription,
  TodoButton,
  TodoInput, // Importa el nuevo componente TodoInput
} from "../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <TodoContainer completed={todo.completed}>
      <TodoName>{todo.name}</TodoName>
      <TodoDescription>{todo.description}</TodoDescription>
      <TodoInput
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <FontAwesomeIcon
        icon={faTrash}
        onClick={() => deleteTodo(todo.id)}
        style={{ cursor: "pointer" }}
        />
    </TodoContainer>
  );
};

export default connect(null, { toggleTodo, deleteTodo })(Todo);
