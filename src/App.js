import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "./redux/actions";
import TodoList from "./components/TodoList";
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";


const FormWraapper = styled.div`
  width: 300px;
  margin: auto;
`;

const FormContainer = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;


const App = ({ addTodo }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = () => {
    addTodo(name, description);
    setName("");
    setDescription("");
  };

  return (
    <FormWraapper>
      <h2>TO DO</h2>
      <FormContainer>
        <FormInput
          type="text"
          placeholder="Nombre de la tarea"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormInput
          type="text"
          placeholder="Descripción de la tarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <FontAwesomeIcon
          icon={faPlus}
          onClick={handleAddTodo}
          style={{ cursor: "pointer" }}
        />
      </FormContainer>
      <TodoList />
    </FormWraapper>
  );
};


export default connect(null, { addTodo })(App);
