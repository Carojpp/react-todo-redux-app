import { ADD_TODO, TOGGLE_TODO, DELETE_TODO} from "./types";

export const addTodo = (name, description) => ({
  type: ADD_TODO,
  payload: { name, description },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: { id },
  });
  