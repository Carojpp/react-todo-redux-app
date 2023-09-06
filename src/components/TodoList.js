import React from "react";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/actions";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div>
      <h2>Lista de Tareas</h2>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, { toggleTodo, deleteTodo })(TodoList);
