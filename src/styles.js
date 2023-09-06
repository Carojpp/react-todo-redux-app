import styled from 'styled-components';

export const TodoContainer = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

export const TodoName = styled.h3`
  font-size: 18px;
  margin: 0;
`;

export const TodoDescription = styled.p`
  font-size: 14px;
  margin: 0;
`;

export const TodoButton = styled.button`
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

export const TodoInput = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 5px;

  &:focus {
    outline: none;
    border-color: #007bff; /* Cambia el color del borde al enfocar el input */
  }
`;
