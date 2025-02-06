import React from 'react';
import ToDoItem from './ToDOItem';

const ToDoList = ({ todos, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default ToDoList;